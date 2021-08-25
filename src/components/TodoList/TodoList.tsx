import { FC, useEffect, useState} from 'react';
import { useSelector } from "react-redux";
import Task from '../Task/Task';
import Wrapper from "../Wrapper/Wrapper";
import classes from "./TodoList.module.scss";
import { filterTasks } from '../../utils/helpers';

const TodoList: FC<{filter: string}> = (props) => {
    const {tasks} = useSelector((store: any) => store);
    const [tasksFiltred, setTasksFiltred] = useState<{id: string, task: string, active:boolean}[]>(tasks);

    useEffect(() => {
        const filtred = filterTasks(tasks, props.filter)
        setTasksFiltred(filtred)
    }, [tasks, props.filter])


    return (
        <div className={classes.todoList}>
            <Wrapper>
                {
                    tasksFiltred.map((task:{id: string, task: string, active:boolean}) => <Task key={task.id} id={task.id} task={task.task} active={task.active}/>)
                }
            </Wrapper>
        </div>
    )
}

export default TodoList