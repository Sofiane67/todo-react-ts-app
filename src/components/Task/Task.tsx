import {ChangeEvent, FC, useEffect, useState,MouseEvent, useRef} from "react";
import { useSelector, useDispatch } from 'react-redux';
import CheckboxWrapper from "../CheckboxWrapper/CheckboxWrapper";
import CrossIcon from "../CrossIcon/CrossIcon";
import classes from "./Task.module.scss";
import { updateTask, deleteTask } from '../../redux/actions/tasks/action';
import { updateActiveTask, taskToDelete } from "../../utils/helpers";
import { storageIsUpdated } from "../../redux/actions/localstorage/action";
import iconCheck from "./Icon/icon-check.svg";
import useDragAndDrop from '../../hooks/use-dragAndDrop';


const Task: FC<{
    id: number,
    task: string,
    active: boolean,
    moveTask: (dragIndex: number, hoverIndex: number) => void,
    index: number
}>= (props) => {

    const dispatch = useDispatch();
    const {color} = useSelector((store: any) => store.theme);
    const {tasks} = useSelector((store: any) => store);
    const [idTask, setIdTask] = useState<number>(0);
    const [activeTask, setActiveTask] = useState<boolean>(props.active);
    const [isDelete, setIsDelete] = useState<boolean>(false);
    const ref = useRef<HTMLDivElement>(null);

    const {drag, drop} = useDragAndDrop(props, ref);
    drag(drop(ref));

    const completeTaskHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setActiveTask(currentState => !currentState);
        setIdTask(Number(e.target.id));
    }

    const deleteTaskHandler = (e:MouseEvent<HTMLButtonElement>) => {
        if(e.currentTarget.dataset.id){
            setIdTask(Number(e.currentTarget.dataset.id))
        }
        setIsDelete(true);
        dispatch(storageIsUpdated(true));
    }

    useEffect(() => {
        const [taskToUpdate] = updateActiveTask(tasks,idTask,activeTask)

        if(taskToUpdate){
            dispatch(updateTask(tasks));
        }

        if(isDelete){
            taskToDelete(tasks,idTask);
            dispatch(deleteTask(tasks));
            setIsDelete(false);
            dispatch(storageIsUpdated(false));
        }

    },[idTask, tasks, dispatch,activeTask, isDelete]);

    let classIconCheck = classes["task__icon-check"];
    classIconCheck += !activeTask?` ${classes["task__icon-check--completed"]}`:"";

    let classTaskText = classes["task__text"];
    classTaskText += !activeTask?` ${classes["task__text--completed"]}`:"";

    
    return(
        <div className={`${classes.task} ${classes[`task--${color}`]}`} ref={ref}>
            <label htmlFor={`${props.id}`}>
                <CheckboxWrapper active={activeTask}>
                    <input type="checkbox" id={`${props.id}`} className={classes["task__checkbox"]} onChange={completeTaskHandler}/>
                    <img src={iconCheck} alt="icon check" className={classIconCheck}/>
                </CheckboxWrapper>
            </label>
            <label htmlFor={`${props.id}`} className={classTaskText}>
                {props.task}
            </label>
            <button className={classes["task__delete-btn"]} data-id={props.id} onClick={deleteTaskHandler}>
                <CrossIcon/>
            </button>
        </div>
    )
}

export default Task;