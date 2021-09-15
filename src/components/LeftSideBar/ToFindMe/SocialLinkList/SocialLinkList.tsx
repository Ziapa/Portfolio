import React from "react";
import s from "./SocialLinkList.module.scss"
import instagram from "../../../../assets/instagram.svg"
import vk from "../../../../assets/vk.svg"
import whatsApp from "../../../../assets/whatsapp.svg"


const links = [
    {svg: instagram, link: "https://www.instagram.com/ziapa14/"},
    {svg: vk, link: "https://vk.com/ziapaa"},
    {svg: whatsApp, link: "https://wa.me/79107193719"}
]

export const SocialLinkList = () => {

    return (<div className={s.socialLinkList}>

        {links.map(el => {
            return (
                <a  href={el.link}>
                    <img src={el.svg} alt=""/>
                </a>
            )
        })}

    </div>)


}