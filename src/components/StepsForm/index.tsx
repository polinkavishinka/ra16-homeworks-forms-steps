import React from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import './index.scss';

type StepsFormProps = {
  onAdd(activity: { date: Date; run: string }): void;
  startDate: Date;
  run: string;
  setStartDate(date: Date): void;
  setRun(run: string): void;
};

export const StepsForm: React.FC<StepsFormProps> = ({ startDate, run, onAdd, setRun, setStartDate }) => {
  const onRunHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRun(event.target.value);
  };

  const sendHendler = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const activity = {
      date: startDate,
      run: Number.parseFloat(run).toFixed(1),
    };

    onAdd(activity);
    setRun('');
  };

  return (
    <form className='uk-column-1-3'>
      <div className='form__field'>
        <DatePicker className='uk-input' selected={startDate} onChange={(date: Date) => setStartDate(date)} />
      </div>
      <div className='form__field'>
        <input className='uk-input' type='text' value={run} onChange={onRunHandler} />
      </div>
      <div className='action_button'>
        <button className='uk-button uk-button-primary' onClick={sendHendler}>
          OK
        </button>
      </div>
    </form>
  );
};
