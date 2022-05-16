import React from 'react';

import { Border } from '../GeneralComponents/Border/Border';

import s from './LeftSideBar.module.scss';
import { SkillBlock } from './SkillBlock/SkillBlock';
import { ToFindMe } from './ToFindMe/ToFindMe';

export const LeftSideBar: React.FC<any> = () => (
  <div className={s.leftSideBar}>
    <ToFindMe />

    <Border />

    <SkillBlock />

    <button type="button">HIRE ME</button>
  </div>
);
