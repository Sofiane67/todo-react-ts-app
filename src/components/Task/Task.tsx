import {ChangeEvent, FC, useEffect, useState,MouseEvent, useRef} from "react";
import { useSelector, useDispatch } from 'react-redux';
import CheckboxWrapper from "../CheckboxWrapper/CheckboxWrapper";
import CrossIcon from "../CrossIcon/CrossIcon";
import classes from "./Task.module.scss";
import { updateTask, deleteTask} from '../../redux/actions/tasks/action';
import iconCheck from "./Icon/icon-check.svg";
import useDragAndDrop from '../../hooks/use-dragAndDrop';
import TaskModel from '../models/task';

const Task: FC<{
    id: number,
    task: string,
    active: boolean,
    moveTask: (dragIndex: number, hoverIndex: number) => void,
    index: number
}>= (props) => {

    const dispatch = useDispatch();
    const {color} = useSelector((store: any) => store.theme);
    const {active, completed} = useSelector((store: any) => store.tasks);
    const [idTask, setIdTask] = useState<number>();
    const [activeTask, setActiveTask] = useState<boolean>(props.active);
    const [isDelete, setIsDelete] = useState<boolean>(false);
    const ref = useRef<HTMLDivElement>(null);

    const {drag, drop} = useDragAndDrop(props, ref);
    drag(drop(ref));

    const completeTaskHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setActiveTask(currentState => !currentState);
        setIdTask(Number(e.currentTarget.id));
    }

    const deleteTaskHandler = (e:MouseEvent<HTMLButtonElement>) => {
        if(e.currentTarget.dataset.id){
            setIdTask(Number(e.currentTarget.dataset.id))
        }
        setIsDelete(true);
    }

    useEffect(() => {
        const [a] = active.filter((task:TaskModel) => task.id === idTask);
        const [b] = completed.filter((task:TaskModel) => task.id === idTask);

        if(a && !activeTask){
            const id = active.indexOf(a);
            active.splice(id, 1);
            a.active = activeTask;
            dispatch(updateTask(a));
        }

        if(b && activeTask){
            const id = completed.indexOf(b);
            completed.splice(id, 1);
            b.active = activeTask;
            dispatch(updateTask( b));
        }

        if(isDelete){
            const allTasks = active.concat(completed);
            const [c] = allTasks.filter((task:TaskModel) => task.id === idTask);
            dispatch(deleteTask(active, completed,c));
        }

    },[idTask, active, completed, dispatch, activeTask, isDelete])

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