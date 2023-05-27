import React, { useState, ChangeEvent } from 'react';
import { Result, Inputs } from './Result';

const Calculator: React.FC = () => {
  const [inputs, setInputs] = useState<Inputs>({
    portion: '',
    weight: '',
    hydro: '',
    salt: '',
    oil: '',
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [id]: value,
      
    }));
    console.log(value)
  };
  console.log('olej'+inputs.oil)

  const handleSliderChange = (event: ChangeEvent<HTMLInputElement>) =>{
    const value = event.target.value;
    console.log(value)
  }

  return (
    <section className="calculator">
      <h1 className="calculator_title">SKŁADNIKI</h1>
      <div className="calculator_ingr">
        <div className="calculator_ingr_element">
          <label className="calculator_ingr_element_title">
            Ilość porcji
            <div className='tooltip'>
              <img src="/src/assets/question.png" alt=""/>
              <span>Podaj liczbę odpowiadającą ilości kulek na pizze, które chcesz uzyskać.</span>
            </div>
          </label>
          <input onChange={handleInputChange} value={inputs.portion}  type="range" min="1" max="20" className="calculator_slider" id="portion"/>
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
          <label className="calculator_ingr_element_title">
            Waga jednej porcji (gram)
            <div className='tooltip'>
              <img src="/src/assets/question.png" alt=""/>
              <span className='even'>Podaj wagę jaką mają mieć Twoje kulki na pizzę, zwykle wartość ta wynosi 250-300g zależnie od wielkość pizzy jaką chcesz uzyskać.</span>
            </div>
          </label>
          <input onChange={handleInputChange} value={inputs.weight} step='10' type="range" min="150" max="350" className="calculator_slider" id="weight"/>
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
          <label className="calculator_ingr_element_title">
            Hydracja ciasta (%)
            <div className='tooltip'>
              <img src="/src/assets/question.png" alt=""/>
              <span>Ilość wody w cieście w stosunku do mąki. Przy okrągłych pizzach optymalną ilością jest zakres 55% – 65%.</span>
            </div>
          </label>
          <input onChange={handleInputChange} value={inputs.hydro}  type="range" min="50" max="80" className="calculator_slider" id="hydro"/>
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
          <label className="calculator_ingr_element_title">
            Sól na litr wody (gram)
            <div className='tooltip'>
              <img src="/src/assets/question.png" alt=""/>
              <span className='even'>Wybierz ilość soli biorąc pod uwagę kilka wskazówek. Sugerowany zakres wynosi od 40 g – 65 g na litr wody.</span>
            </div>
          </label>
          <input onChange={handleInputChange} value={inputs.salt} step='5'  type="range" min="0" max="65" className="calculator_slider" id="salt"/>
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
          <label className="calculator_ingr_element_title">
            Oliwa na litr wody (gram)
            <div className='tooltip'>
              <img src="/src/assets/question.png" alt=""/>
              <span>Podaj ilość tłuszczu jaką chcesz dodać do ciasta. Sugerowana ilość 30-50g na litr wody.</span>
            </div>
          </label>
          <input onChange={handleInputChange} value={inputs.oil} step='5' type="range" min="0" max="50" className="calculator_slider" id="oil"/>
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
      <Result inputs={inputs} />
    </section>
  );
};

export { Calculator };
