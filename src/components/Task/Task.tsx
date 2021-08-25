import {ChangeEvent, FC, useEffect, useState,MouseEvent} from "react";
import { useSelector, useDispatch } from 'react-redux';
import CheckboxWrapper from "../CheckboxWrapper/CheckboxWrapper";
import CrossIcon from "../CrossIcon/CrossIcon";
import classes from "./Task.module.scss";
import { updateTask, deleteTask } from '../../redux/actions/tasks/action';
import { updateActiveTask, taskToDelete } from "../../utils/helpers";
import { storageIsUpdated } from "../../redux/actions/localstorage/action";
import iconCheck from "./Icon/icon-check.svg";

const Task: FC<{
    id: string,
    task: string,
    active: boolean
}>= (props) => {

    const dispatch = useDispatch();
    const {color} = useSelector((store: any) => store.theme);
    const {tasks} = useSelector((store: any) => store);
    const [idTask, setIdTask] = useState<string>("");
    const [activeTask, setActiveTask] = useState<boolean>(props.active);
    const [isDelete, setIsDelete] = useState<boolean>(false);

    const completeTaskHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setActiveTask(currentState => !currentState);
        setIdTask(e.target.id);
    }

    const deleteTaskHandler = (e:MouseEvent<HTMLButtonElement>) => {
        if(e.currentTarget.dataset.id){
            setIdTask(e.currentTarget.dataset.id)
        }
        setIsDelete(true);
        dispatch(storageIsUpdated(true));
    }

    useEffect(() => {
        const [taskToUpdate] = updateActiveTask(tasks,idTask,activeTask)

        if(taskToUpdate){
            console.log(isDelete)
            dispatch(updateTask(tasks));
        }

        if(isDelete){
            console.log(isDelete)
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
        <div className={`${classes.task} ${classes[`task--${color}`]}`}>
            <label htmlFor={props.id}>
                <CheckboxWrapper active={activeTask}>
                    <input type="checkbox" id={props.id} className={classes["task__checkbox"]} onChange={completeTaskHandler}/>
                    <img src={iconCheck} alt="icon check" className={classIconCheck}/>
                </CheckboxWrapper>
            </label>
            <label htmlFor={props.id} className={classTaskText}>
                {props.task}
            </label>
            <button className={classes["task__delete-btn"]} data-id={props.id} onClick={deleteTaskHandler}>
                <CrossIcon/>
            </button>
        </div>
    )
}

export default Task;