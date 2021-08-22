import { FC, useEffect, useState } from "react";
import {useSelector } from "react-redux";
import classes from "./BackgroundImage.module.scss";
import bgLightMobile from "./images/bg-mobile-light.jpg";
import bgLightDesktop from "./images/bg-desktop-light.jpg";
import bgDarkMobile from "./images/bg-mobile-dark.jpg";
import bgDarkDesktop from "./images/bg-desktop-dark.jpg";

const BackgroundImage: FC = (props) => {
    const {theme} = useSelector((store:any) => store);
    const {lightTheme} = theme;

    const [bgImg, setBgImg] = useState<{
        bgMobile: string,
        bgDesktop: string
    }>({
        bgMobile: bgLightMobile,
        bgDesktop: bgLightDesktop
    });

    useEffect(() => {
        if(!lightTheme){
            setBgImg({
                bgMobile: bgDarkMobile,
                bgDesktop: bgDarkDesktop
            })
        }else{
            setBgImg({
                bgMobile: bgLightMobile,
                bgDesktop: bgLightDesktop
            })
        }
    }, [lightTheme])

    return (
        <picture>
            <source media="(min-width: 700px)" srcSet={bgImg.bgDesktop}/>
            <img src={bgImg.bgMobile} alt="" className={classes.img}></img>
        </picture>
    )
}

export default BackgroundImage;