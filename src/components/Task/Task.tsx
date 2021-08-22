import { FC } from "react";
import CheckboxWrapper from "../CheckboxWrapper/CheckboxWrapper";
import CrossIcon from "../CrossIcon/CrossIcon";
import classes from "./Task.module.scss";
import { useSelector } from 'react-redux';

const Task: FC<{
    id: string,
    task: string
}>= (props) => {
    const {color} = useSelector((store: any) => store.theme);

    return(
        <div className={`${classes.task} ${classes[`task--${color}`]}`}>
            <CheckboxWrapper/>
            <p className={classes["task__text"]} data-id={props.id}>{props.task}</p>
            <CrossIcon/>
        </div>
    )
}

export default Task;