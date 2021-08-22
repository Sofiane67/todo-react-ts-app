import { FC } from "react";
import classes from "./CheckboxWrapper.module.scss";

const CheckboxWrapper: FC = (props) => {
    return (
        <div className={classes.checkboxWrapper}>
            {props.children}
        </div>
    )
}

export default CheckboxWrapper;