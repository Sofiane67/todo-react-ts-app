import { FC } from "react";
import { useSelector } from "react-redux";
import classes from "./Wrapper.module.scss";

const Wrapper: FC = (props) => {
    const {color} = useSelector((store : any)=> store.theme);
    
    return (
        <div className={`${classes.wrapper} ${classes[`wrapper--${color}`]}`}>
            {props.children}
        </div>
    )
}

export default Wrapper;