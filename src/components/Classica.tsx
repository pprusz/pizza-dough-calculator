export const Classica = (props) =>{
    const portion = props.portion;
    return(
        <section className="recipe">
            <span className="recipe_description">Pizza neapolitańska to tradycyjna włoska pizza, pochodząca z Neapolu. Jest uważana za jedną z najbardziej klasycznych i autentycznych odmian pizzy.</span>
            <h1 className="recipe_title">Składniki</h1>
            <div className="recipe_ingredients">
                <span className="recipe_ingredients_element">Ilość porcji: {portion}</span>
                <span className="recipe_ingredients_element">Mąka:</span>
                <span className="recipe_ingredients_element">Woda:</span>
                <span className="recipe_ingredients_element">Sól:</span>
                <span className="recipe_ingredients_element">Oliwa:</span>
                <span className="recipe_ingredients_element">Drożdże:</span>
            </div>
        </section> 
    )
}