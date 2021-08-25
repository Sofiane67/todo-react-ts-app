import { FC } from 'react';
import { useSelector } from "react-redux";
import Task from '../Task/Task';
import Wrapper from "../Wrapper/Wrapper";
import classes from "./TodoList.module.scss";

const TodoList: FC = () => {
    const {tasks} = useSelector((store: any) => store);

    return (
        <div className={classes.todoList}>
            <Wrapper>
                {
                    tasks.map((task:{id: string, task: string, active:boolean}) => <Task key={task.id} id={task.id} task={task.task} active={task.active}/>)
                }
            </Wrapper>
        </div>
    )
}

export default TodoList