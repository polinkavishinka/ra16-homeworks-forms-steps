import React from 'react';

import { Row } from './Row';
import { TActivity } from '../../types';

import './index.scss';

type StepsTableProps = {
  activities: TActivity[];
  onRemove(id: string): void;
  onChange(id: string): void;
};
export const StepsTable: React.FC<StepsTableProps> = ({ activities, onRemove, onChange }) => {
  return (
    <div className='steps__table '>
      <div className='steps__table_header'>
        <div className='header__row'>
          <div className='table_header_date'>Дата (ДД.ММ.ГГ)</div>
          <div className='table_header_run'>Пройдено км</div>
          <div className='table_header_action'>Действия</div>
        </div>
      </div>

      <div className='steps__table_body'>
        {activities.map((activity) => (
          <Row key={activity.id} activity={activity} onRemove={onRemove} onChange={onChange} />
        ))}
      </div>
    </div>
  );
};
