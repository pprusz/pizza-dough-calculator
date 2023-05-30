

const Fast = (props) =>{
    const flourWeight = props.flourWeight;
    const waterWeight = props.waterWeight;
    const saltWeight = props.saltWeight;
    const oilWeight = props.oilWeight;
    const yeastWeight = props.yeastWeight;
    const portion = props.portion;

    
    return(
        <section className="instructions">
            <ol>
                <li>W {Math.floor(waterWeight*0.2)}ml ciepłej wody rozpuść {yeastWeight}g drożdży i odstaw na 15 minut.</li>
                <li>Do miski wsyp {flourWeight}g mąki.</li>
                <li>Wlej {Math.floor(waterWeight*0.8)}g wody, wlej {oilWeight}g oliwy oraz dodaj {saltWeight}g soli.</li>
                <li>Połącz składniki w misce.</li>
                <li>Dodaj drożdże i wymieszaj dokładnie składniki</li>
                <li>Kiedy ciasto będzie gładkie i będzie miało jednolitą strukturę podziel je na {portion} części.</li>
                <li>Z podzielonych porcji uformuj kulki.</li>
                <li>Włóż kulki do lekko naoliwionych pojemników i szczelnie przykryj.</li>
                <li>Pojemniki odstaw na godzinę w ciepłe nienasłonecznione miejsce.</li>
                <li>Po godzinie można piec pizze.</li>
            </ol>
        </section>
    )
}

export {Fast}