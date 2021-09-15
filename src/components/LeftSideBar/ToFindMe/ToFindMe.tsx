import React from "react";
import { SocialLinkList } from "./SocialLinkList/SocialLinkList";
import s from './ToFindMe.module.scss';

export const ToFindMe = () => {


    return (<div className={s.toFindMe}>

        <img
            src="https://portfo-project-git-main-ojjomedia.vercel.app/static/images/profile-8178b9f56ac749188ede39aacf38db78.png"
            alt="" className={s.img}/>
        <h4>
            <a href="https://vk.com/ziapaa">Denis Zapolskiy</a>
        </h4>
        <h5>
            React Front-End Developer
        </h5>

        <SocialLinkList/>

    </div>)


}