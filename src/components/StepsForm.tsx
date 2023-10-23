import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { Step } from "../interface";

interface FormProps {
  onSubmit: CallableFunction,
  body: Step,
}

function StepsForm(props: FormProps): JSX.Element {
  const { onSubmit, body } = props;

  const initForm: Step = {
    id: '',
    date: '',
    distance: '',
  };

  const [ form, setForm ] = useState(body);

  console.log(form);

  if (body.id !== form.id) {
    setForm(body);
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onSubmit({
      ...form,
      id: uuidv4(),
    });

    setForm(initForm);
  }

  const handlerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    const { name, value } = event.target;

    setForm((prevForm) => {
      return {
        ...prevForm,
        [name]: value,
      }
    })
  }

  return (
    <>
      <form className='steps-form' onSubmit={handleSubmit}>
        <div className="form-col">
          <label className='form-group'>
            <span className='form-hint'>Дата (ДД.ММ.ГГГГ)</span>
            <input
              type="date"
              className='form-control'
              name='date'
              value={form.date}
              onChange={handlerChange}
              required/>
          </label>
        </div>
        <div className="form-col">
          <label className='form-group'>
            <span className='form-hint'>Пройдено км</span>
            <input
              type="text"
              className='form-control'
              name='distance'
              value={form.distance}
              onChange={handlerChange}
              pattern="\d+(\.\d+)?"
              required/>
          </label>
        </div>
        <div className="form-col">
          <button type="submit" className='form-control'>OK</button>
        </div>
      </form>
    </>
  )
}

export default StepsForm;
