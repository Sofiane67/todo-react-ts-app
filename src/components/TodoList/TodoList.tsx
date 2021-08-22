import { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import Task from '../Task/Task';
import Wrapper from "../Wrapper/Wrapper";
import classes from "./TodoList.module.scss";

const TodoList: FC = (props) => {
    const {tasks} = useSelector((store: any) => store);
    return (
        <div className={classes.todoList}>
            <Wrapper>
                {
                    tasks.map((task:{id: string, task: string}) => <Task key={task.id} id={task.id} task={task.task}/>)
                }
            </Wrapper>
        </div>
    )
}

export default TodoList