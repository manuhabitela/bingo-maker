import React from 'react';
import {inputToCells} from './utils';



export default function Input({ value, onChange }) {
  const lines = inputToCells(value).length;
  const grid16 =
    lines <= 16 ? (
      lines === 16 ? (
        <em>Good for a 4x4 card!</em>
      ) : (
        <strong>
          {"Missing " +
            (16 - lines) +
            " line" +
            (16 - lines > 1 ? "s" : "") +
            " for a 4x4 card."}
        </strong>
      )
    ) : (
      ""
    );
  const grid25 =
    lines <= 25 ? (
      lines === 25 ? (
        <em>Good for a 5x5 card!</em>
      ) : (
        <strong>
          {"Missing " +
            (25 - lines) +
            " line" +
            (25 - lines > 1 ? "s" : "") +
            " for a 5x5 card."}
        </strong>
      )
    ) : (
      ""
    );
  return (
    <div className="Input">
      <label htmlFor="input">Boxes content (one box per line)</label>
      <textarea
        id="input"
        value={value}
        onChange={e => {
          onChange(e.target.value);
        }}
      />
      <p>
        {lines} lines. {grid16} {grid25}
      </p>
    </div>
  );
};
