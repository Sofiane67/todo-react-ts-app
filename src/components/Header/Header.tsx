import { FC, useState, useEffect, ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import TodoForm from "../TodoForm/TodoForm";
import BackgroundImage from "../BackgroundImage/BackgroundImage";
import classes from "./Header.module.scss";
import iconMoon from "./Icon/icon-moon.svg";
import iconSun from "./Icon/icon-sun.svg";
import { LIGHT_THEME, DARK_THEME } from "../../redux/actions/theme/types";
import { changeTheme } from '../../redux/actions/theme/action';

const Header: FC = (props) => {
    const dispatch = useDispatch();
    const [icon, setIcon] = useState<string>(iconMoon);
    const [isChecked, setIsChecked] = useState<boolean>(true);

    const changeThemeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setIsChecked(checked => !checked);
    }

    useEffect(() => {
        if(!isChecked){
            dispatch(changeTheme(DARK_THEME));
            setIcon(iconSun);
        }else{
            dispatch(changeTheme(LIGHT_THEME));
            setIcon(iconMoon);
        }

    },[isChecked,dispatch]);

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
                        <input type="checkbox" id="choiceBox" className={classes["header__checkbox"]} checked={isChecked} onChange={changeThemeHandler}/>
                    </div>
                </div>
                <TodoForm/>
            </div>
        </header>
    )
}

export default Header;