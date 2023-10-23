import { useState } from 'react';
import './App.css';
import StepsForm from './components/StepsForm';
import StepsTable from './components/StepsTable';
import { Step } from './interface';

function App(): JSX.Element {
  const [steps, setSteps] = useState([
    {
      id: '1',
      date: '2019-07-20',
      distance: '15.1',
    },
    {
      id: '2',
      date: '2019-08-15',
      distance: '10',
    }
  ]
  );
  const initEditedStep = {
    id: '',
    date: '',
    distance: '',
  }

  const [ editedStep, setEditedStep ] = useState(initEditedStep);

  const changeSteps = (data: Step): void => {
    setSteps((last) => {
      const current = [
        ...last,
        data
      ];
      setEditedStep(initEditedStep);
      return current.sort((item1, item2) => {
        if (item1.date > item2.date) {
          return 1;
        }

        if (item1.date < item2.date) {
          return -1;
        }

        return 0;
      });
    });
  }

  const deleteRow = (id: string): void => {
    setSteps((last) => {
      return last.filter((item) => item.id != id);
    });
  }

  const startEditRow = (id: string): void => {
    const current = steps.find((item) => item.id === id);
    if (steps.length > 0) {
      if (current) {
        setEditedStep( current );

        setSteps((last) => {
          return last.filter((item) => item !== current);
        })
      }
    }
  }

  return (
    <>
      <StepsForm onSubmit={changeSteps} body={editedStep} />
      <StepsTable steps={steps} deleteRow={deleteRow} editRow={startEditRow} />
    </>
  )
}

export default App;
