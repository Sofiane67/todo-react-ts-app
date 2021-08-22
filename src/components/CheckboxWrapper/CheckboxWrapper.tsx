import { FC } from "react";
import { useSelector } from "react-redux";
import classes from "./CheckboxWrapper.module.scss";

const CheckboxWrapper: FC = (props) => {
    const {color} = useSelector((store: any) => store.theme);

    return (
        <div className={`${classes.checkboxWrapper} ${classes[`checkboxWrapper--${color}`]}`}>
            {props.children}
        </div>
    )
}

export default CheckboxWrapper;