import { FC } from "react";
import Wrapper from "../Wrapper/Wrapper";
import CheckboxWrapper from "../CheckboxWrapper/CheckboxWrapper";
import classes from "./TodoForm.module.scss";

const TodoForm: FC = (props) => {
    return (
        <Wrapper>
            <CheckboxWrapper/>
            <form className={classes.todoForm}>
                <input type="text" placeholder="Ajouter une nouvelle tâche..." className={classes["todoForm__input"]}/>
            </form>
        </Wrapper>
    )
}

export default TodoForm;