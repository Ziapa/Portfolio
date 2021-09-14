import React from "react";
import s from "./SocialLinkList.module.scss"
import instagram from "../../../assets/instagram.svg"
import vk from "../../../assets/vk.svg"
import whatsApp from "../../../assets/whatsapp.svg"


export const SocialLinkList = () => {

    return (<div className={s.socialLinkList}>
        <a target={"_blank"} href="https://www.instagram.com/ziapa14/">
            <img src={instagram} alt=""/>
        </a>
        <a target={"_blank"} href="https://vk.com/ziapaa">
            <img src={vk} alt=""/>
        </a>
        <a target={"_blank"} href="https://wa.me/79107193719">
            <img src={whatsApp} alt=""/>
        </a>

    </div>)


}