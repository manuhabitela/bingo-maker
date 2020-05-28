import React from 'react';
import {inputToCells} from './utils';
import Grid from './Grid';
import Input from './Input';


const RandomGrid = ({cells}) => {
  return (
    <Grid cells={[...cells].sort(() => Math.random() - 0.5)} />
  )
};

export default function App() {
  const [currentPage, setCurrentPage] = React.useState(
    localStorage.getItem("currentPage") || "Input"
  );
  const onPageChange = page => {
    setCurrentPage(page);
    localStorage.setItem("currentPage", page);
  };
  const isInputPage = currentPage === "Input";
  const isGridPage = currentPage === "Grid";

  const [input, setInput] = React.useState(localStorage.getItem("input") || "");
  const onInputChange = val => {
    setInput(val);
    localStorage.setItem("input", val);
  };

  const [numberOfGrids, setNumberOfGrids] = React.useState("1");
  const onNumberChange = val => {
    setNumberOfGrids(val * 1);
  };

  return (
    <div className="App">
      <h1>Bingoooooo</h1>
      <ul className="Menu">
        <li>
          {!isInputPage && (
            <a href="#input" onClick={onPageChange.bind(this, "Input")}>
              Form
            </a>
          )}
          {isInputPage && <span>Form</span>}
        </li>
        <li>
          {!isGridPage && (
            <a href="#grids" onClick={onPageChange.bind(this, "Grid")}>
              Cards
            </a>
          )}
          {isGridPage && <span>Cards</span>}
        </li>
      </ul>
      <div className="App-content">
        {isInputPage && <Input value={input} onChange={onInputChange} />}
        {isGridPage && (
          <React.Fragment>
            <div className="NumberOfGrids">
              <label key="numberOfGridsLabel" htmlFor="grilles">
                Number of cards
              </label>
              <input
                id="grilles"
                key="numberOfGrids"
                type="number"
                min="1"
                value={numberOfGrids}
                onChange={e => onNumberChange(e.target.value)}
              />
              <button
                type="button"
                onClick={() => {
                  window.print();
                }}
              >
                Print
              </button>
            </div>
            <div className="Grids">
              {[...Array(numberOfGrids)].map((val, k) => (
                <RandomGrid
                  key={k}
                  cells={inputToCells(input)}
                />
              ))}
            </div>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};
