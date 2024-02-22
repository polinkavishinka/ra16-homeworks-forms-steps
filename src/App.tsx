import React, { useState } from 'react';

import { nanoid } from 'nanoid';

import { StepsForm } from './components/StepsForm';
import { StepsTable } from './components/StepsTable';
import { TActivity } from './types';

import './App.scss';

const App: React.FC = () => {
  const [activityState, setActivityState] = useState<TActivity[]>([]);
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [run, setRun] = useState<string>('');
  const [isChange, setIsChange] = useState<boolean>(false);

  const addHandler = (activity: { date: Date; run: string }) => {
    const findSame = activityState.find((item) => item.date.getTime() === activity.date.getTime());
    if (findSame) {
      setActivityState((prev) => {
        return prev.map((item) => {
          if (item.date.getTime() === activity.date.getTime()) {
            const newRan = isChange ? Number.parseFloat(activity.run) : Number.parseFloat(item.run) + Number.parseFloat(activity.run);
            return { ...item, run: newRan.toFixed(1) };
          }
          return item;
        });
      });
      setIsChange(false);
    } else {
      setActivityState((prev) => [{ ...activity, id: nanoid() }, ...prev].sort((a, b) => b.date.getTime() - a.date.getTime()));
    }
  };

  const removeHandler = (id: string) => {
    setActivityState((prev) => prev.filter((item) => item.id !== id));
  };

  const changeHandler = (id: string) => {
    const findActivity: TActivity | undefined = activityState.find((item) => item.id === id);
    if (findActivity) {
      setStartDate(findActivity.date);
      setRun(findActivity.run);
      setIsChange(true);
    }
  };

  return (
    <div className='app'>
      <div className='uk-container'>
        <div className='app__form'>
          <StepsForm onAdd={addHandler} startDate={startDate} run={run} setStartDate={setStartDate} setRun={setRun} />
        </div>
        <div className='app__table'>
          <StepsTable activities={activityState} onRemove={removeHandler} onChange={changeHandler} />
        </div>
      </div>
    </div>
  );
};

export default App;
