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
            <div className='tooltip'>
              <img src="/src/assets/question.png" alt=""/>
              <span>Podaj liczbę odpowiadającą ilości kulek na pizze, które chcesz uzyskać.</span>
            </div>
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
            <div className='tooltip'>
              <img src="/src/assets/question.png" alt=""/>
              <span className='even'>Podaj wagę jaką mają mieć Twoje kulki na pizzę, zwykle wartość ta wynosi 250-300g zależnie od wielkość pizzy jaką chcesz uzyskać.</span>
            </div>
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
            <div className='tooltip'>
              <img src="/src/assets/question.png" alt=""/>
              <span>Ilość wody w cieście w stosunku do mąki. Przy okrągłych pizzach optymalną ilością jest zakres 55% – 65%.</span>
            </div>
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
            <div className='tooltip'>
              <img src="/src/assets/question.png" alt=""/>
              <span className='even'>Wybierz ilość soli biorąc pod uwagę kilka wskazówek. Sugerowany zakres wynosi od 40 g – 60 g na litr wody.</span>
            </div>
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
            <div className='tooltip'>
              <img src="/src/assets/question.png" alt=""/>
              <span>Podaj ilość tłuszczu jaką chcesz dodać do ciasta. Sugerowana ilość 30-50g na litr wody.</span>
            </div>
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

      <Result inputs={inputs}/>
    </section>
  );
};

export { Calculator };
