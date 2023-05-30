import {useState, ChangeEvent} from "react";

import { Napoletana } from "./Napoletana";
import { Classica } from "./Classica";
import { Romana } from "./Romana";

const Recipes = () =>{
    const [recipe, setRecipe] = useState(0);
    const [portion, setPortion] = useState(1);

    const handleRecipeChange = (index: number) =>{
        setRecipe(index);
        setPortion(1);
    };

    const handlePortionChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event?.target.value
        setPortion(value);
      };
    
    return(
        <section className="recipes">
            <h1 className="recipes_title">WYBIERZ RODZAJ PIZZY</h1>
            <div className="recipes_buttons">
                <button onClick={()=>handleRecipeChange(0)} className={`recipes_buttons_button ${recipe === 0 ? 'active' : ''}`}>Napoletana</button>
                <button onClick={()=>handleRecipeChange(1)} className={`recipes_buttons_button ${recipe === 1 ? 'active' : ''}`}>Classica</button>
                <button onClick={()=>handleRecipeChange(2)} className={`recipes_buttons_button ${recipe === 2 ? 'active' : ''}`}>Teglia alla Romana</button>
            </div>
            <div className="calculator_ingr_element">
                <label className="calculator_ingr_element_title">Ilość porcji
                </label>
                <input onChange={handlePortionChange} value={portion} type="range" min="1" max="15" className="calculator_slider" id="portion"/>
                <input
                    onChange={handlePortionChange}
                    value={portion}
                    pattern="\d*"
                    maxLength={2}
                    placeholder="5"
                    id="portion"
                    className="calculator_ingr_element_input"
                    type="text"
                />
            </div>
            {recipe === 0 ? <Napoletana/> : recipe === 1 ? <Classica/> : <Romana/>}
        </section>
    )
}
export {Recipes}