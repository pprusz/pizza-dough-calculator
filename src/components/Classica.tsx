export const Classica = (props) =>{
    const portion = props.portion;
    return(
        <section className="recipe">
            <span className="recipe_description">Klasyczna pizza to połączenie cienkiego, chrupiącego ciasta z Twoimi ulubionymi składnikami.</span>
            <h1 className="recipe_title">SKŁADNIKI</h1>
            <div className="recipe_ingredients">
                <span className="recipe_ingredients_element">Ilość porcji: {portion}</span>
                <span className="recipe_ingredients_element">Mąka: {portion * 156}g</span>
                <span className="recipe_ingredients_element">Woda: {portion *86}g</span>
                <span className="recipe_ingredients_element">Sól: {portion *4}g</span>
                <span className="recipe_ingredients_element">Oliwa: {portion *4}g</span>
                <span className="recipe_ingredients_element">Drożdże: {portion *0.32}g</span>
            </div>
        </section> 
    )
}