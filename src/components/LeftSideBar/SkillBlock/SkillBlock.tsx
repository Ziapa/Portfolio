import React from 'react';

import { Border } from '../../GeneralComponents/Border/Border';

import s from './SkillBlock.module.scss';

export const SkillBlock: React.FC<any> = () => {
  const author = {
    info: [
      { name: 'Age', value: '24' },
      { name: 'Residence', value: 'RU' },
      { name: 'Address', value: 'Russia, St. Petersburg' },
    ],
  };

  return (
    <div className={s.skillBlock}>
      {author.info.map(el => (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            margin: '15px 0',
            fontSize: '12px',
          }}
        >
          <div
            style={{
              padding: '5px 8px',
              backgroundColor: '#ffb400',
            }}
          >
            {' '}
            {el.name}:
          </div>
          <div> {el.value}</div>
        </div>
      ))}

      <Border />
    </div>
  );
};
