import { FC, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import TodoForm from "../TodoForm/TodoForm";
import BackgroundImage from "../BackgroundImage/BackgroundImage";
import classes from "./Header.module.scss";
import iconMoon from "./Icon/icon-moon.svg";
import iconSun from "./Icon/icon-sun.svg";

const Header: FC = (props) => {
    const {theme} = useSelector((store: any) => store);
    const {lightTheme} = theme;
    const [icon, setIcon] = useState<string>(iconMoon);

    useEffect(() => {
        if(!lightTheme){
            setIcon(iconSun);
        }else{
            setIcon(iconMoon);
        }
    },[lightTheme]);

    return(
        <header className={classes.header}>
            <div className={classes["header__bg-box"]}>
            <BackgroundImage/>
            </div>
            <div className={classes["header__content"]}>
                <div className={classes["header__head-content"]}>
                    <h1 className={classes["header__logo"]}>TODO</h1>
                    <div className={classes["header__choice-box"]}>
                        <label htmlFor="choiceBox" className={classes["header__iconTheme"]}>
                            <img src={icon} alt="icon changement de theme"/>
                        </label>
                        <input type="checkbox" className={classes["header__checkbox"]} defaultChecked/>
                    </div>
                </div>
                <TodoForm/>
            </div>
        </header>
    )
}

export default Header;