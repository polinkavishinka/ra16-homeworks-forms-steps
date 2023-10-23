import { Step } from "../interface";
import StepsRow from "./StepsRow";

function StepsTable(props: {steps: Step[], editRow: CallableFunction, deleteRow: CallableFunction}): JSX.Element {
  const { steps, deleteRow, editRow } = props;

  return (
    <>
      <div className="steps-table">
        <div className="result-row row-header">
          <div className="resilt-head result-date">Дата (ДД.ММ.ГГГГ)</div>
          <div className="result-head result-distance">Пройдено км</div>
          <div className="result-head-resilt-controls">Действия</div>
        </div>
        {
          steps.length > 0
            ? (<div className="result-body">
                {steps.map((item) => <StepsRow key={item.id} {...item} deleteRow={deleteRow} editRow={editRow} />)}
              </div>)
            : null
        }
      </div>
    </>
  );
}

export default StepsTable;
