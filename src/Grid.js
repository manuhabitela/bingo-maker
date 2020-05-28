import React from 'react';



export default function Grid({ cells }) {
  const [state, setState] = React.useState({});
  const toggle = key => {
    setState(prevState => ({
      ...prevState,
      ...{
        [key]: typeof prevState[key] !== "undefined" ? !prevState[key] : true
      }
    }));
  };
  return (
    <div className={`Grid Grid--${cells.length}`}>
      {cells.map((cell, k) => {
        const isDone = !!state[k + 1];
        return (
          <div
            key={cell}
            onClick={toggle.bind(this, k + 1)}
            className={`Cell ${isDone ? "Cell--done" : ""}`}
          >
            <span>{cell} {isDone && <span className="ScreenReaderOnly">(done!)</span>}</span>
          </div>
        );
      })}
    </div>
  );
};
