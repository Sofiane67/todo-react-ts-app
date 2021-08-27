import { FC, useEffect, useState, useCallback } from 'react';
import { useSelector } from "react-redux";
import Task from '../Task/Task';
import Wrapper from "../Wrapper/Wrapper";
import classes from "./TodoList.module.scss";
import TaskModel from '../models/task';
import { moveTaskHelper,sortObjectArray } from '../../utils/helpers';

const TodoList: FC<{filter: string}> = (props) => {
    const {tasks} = useSelector((store: any) => store);
    const {active, completed} = useSelector((store: any) => store.tasks);
    const allTasks = active.concat(completed);
    const [tasksFiltred, setTasksFiltred] = useState<TaskModel[]>(allTasks);
    const moveTask = useCallback(moveTaskHelper(tasksFiltred, setTasksFiltred), [tasksFiltred, setTasksFiltred]);
    
    useEffect(() => {
        switch (props.filter) {
            case "Active":
                setTasksFiltred(sortObjectArray(active))
                break;
            case "Completed":
                setTasksFiltred(sortObjectArray(completed))
                break;
            default:
                setTasksFiltred(sortObjectArray(active.concat(completed)));
                break
        }
    }, [props.filter, active, completed, tasks]); 

    return (
        <div className={classes.todoList}>
            <Wrapper>
                {
                    tasksFiltred.map((task:TaskModel, index:number) => <Task key={task.id} id={task.id} task={task.task} active={task.active} moveTask={moveTask} index={index}/>)
                }
            </Wrapper>
        </div>
    )
}

export default TodoList