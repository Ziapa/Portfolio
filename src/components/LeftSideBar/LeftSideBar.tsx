import React from "react";
import s from './LeftSideBar.module.scss';
import {Border} from "../Border/Border";
import {SocialLinkList} from "./SocialLinkList/SocialLinkList";

export const LeftSideBar = () => {


    return (<div className={s.wrapperSideBar}>

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
        <Border/>


    </div>)


}