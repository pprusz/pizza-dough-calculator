import {useState, ChangeEvent} from "react";

import { Napoletana } from "./Napoletana";
import { Classica } from "./Classica";

const Recipes = () =>{
    const [recipe, setRecipe] = useState(0);
    const [portion, setPortion] = useState(1);

    const handleRecipeChange = (index: number) =>{
        setRecipe(index);
    };

    const handlePortionChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = Number(event?.target.value);
        setPortion(value);
      };
    
    return(
        <section className="recipes">
            <h1 className="recipes_title">WYBIERZ RODZAJ PIZZY</h1>
            <div className="recipes_buttons">
                <button onClick={()=>handleRecipeChange(0)} className={`recipes_buttons_button ${recipe === 0 ? 'active' : ''}`}>Napoletana</button>
                <button onClick={()=>handleRecipeChange(1)} className={`recipes_buttons_button ${recipe === 1 ? 'active' : ''}`}>Classica</button>
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
            {recipe === 0 ? <Napoletana portion= {portion}/> : <Classica portion= {portion}/> }
        </section>
    )
}
export {Recipes}