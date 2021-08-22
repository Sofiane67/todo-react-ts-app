import { FC } from "react";
import { useSelector } from "react-redux";
import classes from "./CrossIcon.module.scss";

const CrossIcon : FC = (props) => {
    const {color} = useSelector((store: any) => store.theme);

    return(
        <svg className={`${classes.crossIcon} ${classes[`crossIcon--${color}`]}`}>
            <path fill="#494C6B" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/>  
        </svg>  
    )
}

export default CrossIcon;