import { ChangeEvent, FC, FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Wrapper from "../Wrapper/Wrapper";
import classes from "./TodoForm.module.scss";
import TaskModel from "../models/task";
import { addNewTask } from "../../redux/actions/tasks/action";

const TodoForm: FC = (props) => {
    const dispatch = useDispatch();
    const {color} = useSelector((store:any) => store.theme);
    const [task, setTask] = useState<string>("");

    const getInputValueHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setTask(e.target.value)
    }

    const addTaskHandler = (e:FormEvent) => {
        e.preventDefault();
        dispatch(addNewTask(new TaskModel(task)));
        setTask("");
    }

    return (
        <Wrapper>
            <div className={classes.todoForm}>
                <div className={`${classes["todoForm__circle"]} ${classes[`todoForm__circle--${color}`]}`}></div>
                <form className={classes["todoForm__form"]} onSubmit={addTaskHandler}>
                    <input type="text" placeholder="Ajouter une nouvelle tâche..." value={task} className={`${classes["todoForm__input"]} ${classes[`todoForm__input--${color}`]}`} onChange={getInputValueHandler}/>
                </form>
            </div>
        </Wrapper>
    )
}

export default TodoForm;