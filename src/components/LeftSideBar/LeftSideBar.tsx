import React from "react";
import s from './LeftSideBar.module.scss';
import {ToFindMe} from "./ToFindMe/ToFindMe";
import {Border} from "../GeneralComponents/Border/Border";
import {SkillBlock} from "./SkillBlock/SkillBlock";

export const LeftSideBar = () => {


    return (<div className={s.leftSideBar}>

        <ToFindMe/>

        <Border/>

        <SkillBlock/>

        <button>HIRE ME</button>

    </div>)


}