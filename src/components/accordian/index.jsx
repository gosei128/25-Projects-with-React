import { useState } from "react";
import data from "./data";
import "./style.css";
const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const [enableMulti, setEnableMulti] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleSingleSelection = (getCurrentId) => {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  };
  const handleMultipleSelection = (getCurrentId) => {
    let cpyMultple = [...multiple];
    const findIndexOf = cpyMultple.indexOf(getCurrentId);

    if (findIndexOf === -1) cpyMultple.push(getCurrentId);
    else cpyMultple.splice(findIndexOf, 1);

    setMultiple(cpyMultple);
  };
  console.log(selected, multiple);
  return (
    <div className="wrapper">
      <button onClick={() => setEnableMulti(!enableMulti)}>
        Enable Multi Selection
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div
                className="title"
                onClick={() =>
                  enableMulti
                    ? handleMultipleSelection(dataItem.id)
                    : handleSingleSelection(dataItem.id)
                }
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {enableMulti ? (
                multiple.indexOf(dataItem.id) !== -1 && (
                  <div className="content">{dataItem.answer} </div>
                )
              ) : selected === dataItem.id ? (
                <div className="content">{dataItem.answer} </div>
              ) : null}
            </div>
          ))
        ) : (
          <div> Data Not Found </div>
        )}
      </div>
    </div>
  );
};

export default Accordian;
