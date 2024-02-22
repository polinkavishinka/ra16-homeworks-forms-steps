import React from 'react';

import { TActivity } from '../../../types';

import './index.scss';

type RowProps = {
  activity: TActivity;
  onRemove(id: string): void;
  onChange(id: string): void;
};
export const Row: React.FC<RowProps> = ({ activity, onRemove, onChange }) => {
  return (
    <div className='body_row'>
      <div className='cell table_body_date'>{activity.date.toLocaleDateString('ru-RU')}</div>
      <div className='cell table_body_run'>{activity.run}</div>
      <div className='cell table_body_action'>
        <button className='uk-button uk-button-default body_action_btn' onClick={() => onChange(activity.id)}>
          <span uk-icon='pencil'></span>
        </button>
        <button className='uk-button uk-button-default body_action_btn' onClick={() => onRemove(activity.id)}>
          <span uk-icon='close'></span>
        </button>
      </div>
    </div>
  );
};
