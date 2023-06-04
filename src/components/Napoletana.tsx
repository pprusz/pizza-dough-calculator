export const Napoletana = (props) =>{
    const portion = props.portion;
    return(
        <section className="recipe">
            <span className="recipe_description">Pizza neapolitańska to tradycyjna włoska pizza, pochodząca z Neapolu. Jest uważana za jedną z najbardziej klasycznych i autentycznych odmian pizzy.</span>
            <h1 className="recipe_title">SKŁADNIKI</h1>
            <div className="recipe_ingredients">
                <span className="recipe_ingredients_element">Ilość porcji: {portion}</span>
                <span className="recipe_ingredients_element">Mąka: {portion * 149}g</span>
                <span className="recipe_ingredients_element">Woda: {portion *97}g</span>
                <span className="recipe_ingredients_element">Sól: {portion *5}g</span>
                <span className="recipe_ingredients_element">Drożdże: {portion *0.22}g</span>
            </div>
        </section>
    )
}