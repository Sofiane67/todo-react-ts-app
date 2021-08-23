import { FC, useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import classes from "./CheckboxWrapper.module.scss";

const CheckboxWrapper: FC <{active:boolean}> = (props) => {
    const {color} = useSelector((store: any) => store.theme);
    const [isChecked, setIsChecked] = useState<boolean>(props.active);

    useEffect(() => {
        setIsChecked(props.active)
    },[props.active]);

    let classCheckboxWrapper = `${classes.checkboxWrapper} ${classes[`checkboxWrapper--${color}`]}`;
    classCheckboxWrapper += !isChecked ? ` ${classes["checkboxWrapper--checked"]}`:"";

    let classBgColor = `${classes["checkboxWrapper__bgColor"]} ${classes[`checkboxWrapper__bgColor--${color}`]}`;
    classBgColor += !isChecked ?` ${classes[`checkboxWrapper__bgColor--checked`]}`:"";

    return (
        <div className={classCheckboxWrapper}>
            <div className={classBgColor}>
                {props.children}
            </div>
        </div>
    )
}

export default CheckboxWrapper;