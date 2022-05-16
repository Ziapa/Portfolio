import React from 'react';

import instagram from '../../../../assets/instagram.svg';
import vk from '../../../../assets/vk.svg';
import whatsApp from '../../../../assets/whatsapp.svg';

import s from './SocialLinkList.module.scss';

const links = [
  { id: 1, svg: instagram, link: 'https://www.instagram.com/ziapa14/' },
  { id: 2, svg: vk, link: 'https://vk.com/ziapaa' },
  { id: 3, svg: whatsApp, link: 'https://wa.me/79107193719' },
];

export const SocialLinkList: React.FC<any> = () => (
  <div className={s.socialLinkList}>
    {links.map(({ id, svg, link }) => (
      <a key={id} href={link}>
        <img src={svg} alt="" />
      </a>
    ))}
  </div>
);
