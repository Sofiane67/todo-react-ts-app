import { FC, useCallback, useEffect, useState} from 'react';
import { useSelector } from "react-redux";
import Task from '../Task/Task';
import Wrapper from "../Wrapper/Wrapper";
import classes from "./TodoList.module.scss";
import { filterTasks, updateStorage, moveTaskHelper } from '../../utils/helpers';
import TaskModel from '../models/task';


const TodoList: FC<{filter: string}> = (props) => {
    const {tasks} = useSelector((store: any) => store);
    const [tasksFiltred, setTasksFiltred] = useState<TaskModel[]>(tasks);
    const moveTask = useCallback(moveTaskHelper(tasksFiltred, setTasksFiltred), [tasksFiltred,setTasksFiltred])

    useEffect(() => {
        const filtred = filterTasks(tasks, props.filter)
        setTasksFiltred(filtred);
    }, [tasks, props.filter])
    updateStorage(tasksFiltred);
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