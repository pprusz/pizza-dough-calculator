import React, { useState } from 'react';
import { Result } from './Result';

const Calculator = () => {
    const [inputs, setInputs] = useState({
        portion: '',
        weight: '',
        hydro: '',
        salt: '',
        oil: '',
    });

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [id]: value,
    }));
  };

  return (
    <section className="calculator">
      <h1 className="calculator_title">SKŁADNIKI</h1>
      <div className="calculator_ingr">
        <div className="calculator_ingr_element">
          <label htmlFor="portion" className="calculator_ingr_element_title">
            Ilość porcji
            <img src="/src/assets/question.png" alt="" />
          </label>
          <input
            pattern="\d*"
            maxLength={2}
            placeholder="5"
            id="portion"
            className="calculator_ingr_element_input"
            type="text"
            value={inputs.portion}
            onChange={handleInputChange}
          />
        </div>
        <div className="calculator_ingr_element">
          <label htmlFor="weight" className="calculator_ingr_element_title">
            Waga jednej porcji (gram)
            <img src="/src/assets/question.png" alt="" />
          </label>

          <input
            pattern="\d*"
            maxLength={3}
            placeholder="280"
            id="weight"
            className="calculator_ingr_element_input"
            type="text"
            value={inputs.weight}
            onChange={handleInputChange}
          />
        </div>
        <div className="calculator_ingr_element">
          <label htmlFor="hydro" className="calculator_ingr_element_title">
            Hydracja ciasta (%)
            <img src="/src/assets/question.png" alt="" />
          </label>
          <input
            pattern="\d*"
            maxLength={2}
            placeholder="63"
            id="hydro"
            className="calculator_ingr_element_input"
            type="text"
            value={inputs.hydro}
            onChange={handleInputChange}
          />
        </div>
        <div className="calculator_ingr_element">
          <label htmlFor="salt" className="calculator_ingr_element_title">
            Sól na litr wody (gram)
            <img src="/src/assets/question.png" alt="" />
          </label>
          <input
            pattern="\d*"
            maxLength={2}
            placeholder="50"
            id="salt"
            className="calculator_ingr_element_input"
            type="text"
            value={inputs.salt}
            onChange={handleInputChange}
          />
        </div>
        <div className="calculator_ingr_element">
          <label htmlFor="oil" className="calculator_ingr_element_title">
            Oliwa na litr wody (gram)
            <img src="/src/assets/question.png" alt="" />
          </label>
          <input
            pattern="\d*"
            maxLength={2}
            placeholder="30"
            id="oil"
            className="calculator_ingr_element_input"
            type="text"
            value={inputs.oil}
            onChange={handleInputChange}
          />
        </div>
      </div>
      {/* <button className="calculator_button" onClick={handleSubmit}>OBLICZ PROPORCJE</button> */}
      {/* {visible === 0 ? null : <Result inputs={inputs}/>}       */}
      <Result inputs={inputs}/>
    </section>
  );
};

export { Calculator };
