import React, { useState } from "react";

import { Fast } from "./Fast";
import { Maturing } from "./Maturing";

interface Inputs {
  portion: number;
  weight: number;
  salt: number;
  hydro: number;
  oil: number;
}

const Result: React.FC<{ inputs: Inputs }> = (props) => {
  const inputs = props.inputs;
  const portion = inputs.portion;
  const weight = inputs.weight;
  const salt = inputs.salt;
  const hydro = inputs.hydro;
  const oil = inputs.oil;

  const totalWeight = Math.floor(portion * weight);
  const flourWeight = Math.floor(totalWeight / (1 + hydro / 100));
  const waterWeight = Math.floor((hydro / 100) * flourWeight);
  const saltWeight = Math.floor(salt * (waterWeight / 1000));
  const oilWeight = Math.floor(oil * (waterWeight / 1000));
  const yeast = flourWeight * 0.00117;
  const yeastWeight = yeast.toFixed(2);

  const result =
    inputs.portion === 0 ||
    inputs.weight === 0 ||
    inputs.salt === 0 ||
    inputs.hydro === 0 ||
    inputs.oil === 0
      ? false
      : true;

  const [doughType, setDoughType] = useState(0);

  const setDoughClick = (index: number) => {
    setDoughType(index);
  };

  return (
    <div id="calculator_result" className="calculator_result">
      <h1 className="calculator_result_title">SKŁADNIKI</h1>
      <div className="calculator_result_ingredients">
        <span>Mąka: {result === false ? "" : flourWeight + " g"}</span>
        <span>Woda: {result === false ? "" : waterWeight + " g"}</span>
        <span>Sól: {result === false ? "" : saltWeight + " g"}</span>
        <span>Oliwa: {result === false ? "" : oilWeight + " g"}</span>
        <span>
          Drożdże: {result === false ? "" : yeastWeight + " g"}
          <div className="tooltip inline">
            <img src="/src/assets/question.png" alt="" />
            <span>
              Podana wartość odnosi się do używania drożdży świeżych, jeśli
              chcesz użyć drożdży suchych należy podwoić podaną wartość.
            </span>
          </div>
        </span>
      </div>
      <h1 className="home_wrapper_title">RODZAJ CIASTA</h1>
      <div className="home_wrapper_buttons">
        <button
          onClick={() => setDoughClick(0)}
          className={`home_wrapper_buttons_button ${
            doughType === 0 ? "active" : ""
          }`}
        >
          DOJRZEWAJĄCE
        </button>
        <button
          onClick={() => setDoughClick(1)}
          className={`home_wrapper_buttons_button ${
            doughType === 1 ? "active" : ""
          }`}
        >
          SZYBKIE
        </button>
      </div>
      <h1 className="calculator_result_title">PRZEPIS</h1>
      {doughType === 0 ? (
        <Maturing
          flourWeight={flourWeight}
          waterWeight={waterWeight}
          saltWeight={saltWeight}
          oilWeight={oilWeight}
          yeastWeight={yeastWeight}
        />
      ) : (
        <Fast
          flourWeight={flourWeight}
          waterWeight={waterWeight}
          saltWeight={saltWeight}
          oilWeight={oilWeight}
          yeastWeight={yeastWeight}
        />
      )}
    </div>
  );
};

export { Result };
