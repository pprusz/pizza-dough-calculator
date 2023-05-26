

const Maturing = (props) =>{
    const flourWeight = props.flourWeight;
    const waterWeight = props.waterWeight;
    const saltWeight = props.saltWeight;
    const oilWeight = props.oilWeight;
    const yeastWeight = props.yeastWeight;
    const portion = props.portion;

    
    return(
        <section className="instructions">
            <ol>
                <li>W {waterWeight}ml zimnej wody rozpuść {yeastWeight}g drożdży.</li>
                <li>Następnie porcjami dosypuj {Math.floor(flourWeight*0.8)}g mąki.</li>
                <li>Składniki połącz ze sobą w misce.</li>
                <li>Miskę z wymieszanym ciastem szczelnie owiń folią spożywczą i odstaw na conajmniej 4 godziny w ciepłe, nienasłonecznione miejsce.</li>
                <li>Po tym czasie dodaj {Math.floor(flourWeight*0.2)}g mąki, {saltWeight}g soli oraz {oilWeight}g oliwy z oliwek.</li>
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
        </section>
    )
}

export {Maturing}