import { Row } from "../interface";

function StepsRow(props: Row): JSX.Element {
  const { id, date, distance, deleteRow, editRow } = props;

  const deleteHandler = (): void => {
    deleteRow(id);
  }

  const editHandler = () => {
    editRow(id);
  }

  return (
    <div className="result-row">
      <div className="resilt-ceil result-date">{date.split('-').reverse().join('.')}</div>
      <div className="result-ceil result-distance">{distance}</div>
      <div className="result-ceil resilt-controls">
        <button className='row-btn' onClick={editHandler}>✎</button>
        <button className='row-btn' onClick={deleteHandler}>✘</button>
      </div>
    </div>
  );
}

export default StepsRow;
