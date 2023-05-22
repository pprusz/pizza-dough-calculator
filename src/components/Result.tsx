const Result = (props) =>{
    const inputs = props.inputs;
    const portion = inputs.portion;
    const weight = inputs.weight;
    const salt = inputs.salt;
    const hydro = inputs.hydro;
    const oil = inputs.oil; 

    const totalWeight = Math.floor(portion * weight);
    const flourWeight = Math.floor(totalWeight / (1 + hydro / 100));
    const waterWeight = Math.floor(hydro / 100 * flourWeight);
    const saltWeight = Math.floor(salt * (waterWeight/1000));
    const oliWeight = Math.floor(oil * (waterWeight/1000));

    return(
        <div id="calculator_result" className="calculator_result">
            <h1 className='calculator_result_title'>SKŁADNIKI</h1>
            <div className="calculator_result_ingredients">
                <span>Mąka: {flourWeight}</span>
                <span>Woda: {waterWeight}</span>
                <span>Sól: {saltWeight}</span>
                <span>Oliwa:  {oliWeight}</span>
                <span>Drożdże:   </span>
            </div>
            <h1 className='calculator_result_title'>PRZEPIS</h1>
            
        </div>
    )
}
export {Result}