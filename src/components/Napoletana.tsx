export const Napoletana = (props) =>{
    const portion = props.portion;
    const flour = portion * 149;
    const water = portion *97;
    const salt = portion *5;
    const yeast = portion *0.22
    return(
        <section className="recipe">
            <span className="recipe_description">Pizza neapolitańska to tradycyjna włoska pizza, pochodząca z Neapolu. Jest uważana za jedną z najbardziej klasycznych i autentycznych odmian pizzy.</span>
            <h1 className="recipe_title">SKŁADNIKI</h1>
            <div className="recipe_ingredients">
                <span className="recipe_ingredients_element">Ilość porcji: {portion}</span>
                <span className="recipe_ingredients_element">Mąka: {flour}g</span>
                <span className="recipe_ingredients_element">Woda: {water}g</span>
                <span className="recipe_ingredients_element">Sól: {salt}g</span>
                <span className="recipe_ingredients_element">Drożdże: {yeast}g</span>
            </div>
            <div className="instructions">
                <ol>
                    <li>W {water}ml zimnej wody rozpuść {yeast}g drożdży.</li>
                    <li>Następnie porcjami dosypuj {Math.floor(flour*0.8)}g mąki.</li>
                    <li>Składniki połącz ze sobą w misce.</li>
                    <li>Miskę z wymieszanym ciastem szczelnie owiń folią spożywczą i odstaw na conajmniej 4 godziny w ciepłe, nienasłonecznione miejsce.</li>
                    <li>Po tym czasie dodaj {Math.floor(flour*0.2)}g mąki, {salt}g soli.</li>
                    <li>Dokładnie wymieszaj ze sobą składniki.</li>
                    <li>Uformuj kulkę i przyłóż ją miską na 20 minut.</li>
                    <li>Następnie podnieś kulkę do góry i złóż 3 razy tak, żeby kulka złożyła się na pół.</li>
                    <li>Odstaw kulkę na kolejne 20 minut pod przykryciem.</li>
                    <li>Po tym czasie podziel ciasto na {portion} równych porcji.</li>
                    <li>Uformuj równe kulki i odstaw je do naoliwionych pojemników lub miseczek i szczelnie je przykryj.</li>
                    <li>Odstaw na godzinę w nienasłonecznione miejsce.</li>
                    <li>Schowaj pojemniki do lodówki na 24 godziny.</li>
                    <li>Kulki należy wyjąć z lodówki 4-5 godzin przed pieczeniem.</li>
                </ol>
            </div>
        </section>
    )
}