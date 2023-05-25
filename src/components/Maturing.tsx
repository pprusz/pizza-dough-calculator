

const Maturing = (props) =>{
    const flourWeight = props.flourWeight;
    const waterWeight = props.waterWeight;
    const saltWeight = props.saltWeight;
    const oilWeight = props.oilWeight;
    const yeastWeight = props.yeastWeight;

    
    return(
        <section className="instructions">
            <h2>1. {flourWeight } </h2>
            <h2>2. {waterWeight } </h2>
            <h2>3. {saltWeight } </h2>
            <h2>4. {oilWeight }</h2>
            <h2>5. {yeastWeight }</h2>
        </section>
    )
}

export {Maturing}