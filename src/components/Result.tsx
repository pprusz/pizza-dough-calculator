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
    const yeast = (flourWeight*0.00117);
    const yeastWeight = yeast.toFixed(2);

    const result = (inputs.portion, inputs.weight, inputs.salt, inputs.hydro, inputs.oil) === '' ? false : true;
    // console.log(result)

    return(
        <div id="calculator_result" className="calculator_result">
            <h1 className='calculator_result_title'>SKŁADNIKI</h1>
            <div className="calculator_result_ingredients">
                <span>Mąka: {result === false ? '-' : flourWeight + ' g'}</span>
                <span>Woda: {result === false ? '-' : waterWeight + ' g (ml)'}</span>
                <span>Sól: {result === false ? '-' : saltWeight + ' g'}</span>
                <span>Oliwa:  {result === false ? '-' : oliWeight + ' g'}</span>
                <span>Drożdże: {result === false ? '-' : yeastWeight + ' g'}</span>
            </div>
            <h1 className='calculator_result_title'>PRZEPIS</h1>
            
        </div>
    )
}
export {Result}