const Calculator = () =>{
    return(
        <section className="calculator">
            <h1 className="calculator_title">SKŁADNIKI</h1>
            <div className="calculator_ingr">
                <div className="calculator_ingr_element">
                    <label htmlFor="portion" className="calculator_ingr_element_title">Ilość porcji</label>
                    <input pattern="\d*" maxLength={2} placeholder="5" id="portion" className="calculator_ingr_element_input" type="text" />
                </div>
                <div className="calculator_ingr_element">
                    <label  htmlFor="weight" className="calculator_ingr_element_title">Waga porcji (gram)</label>
                    <input pattern="\d*" maxLength={3} placeholder="280" id="weight" className="calculator_ingr_element_input" type="text" />
                </div>
                <div className="calculator_ingr_element">
                    <label htmlFor="hydro" className="calculator_ingr_element_title">Hydracja ciasta (%)</label>
                    <input pattern="\d*" maxLength={2} placeholder="63" id="hydro" className="calculator_ingr_element_input" type="text" />
                </div>
                <div className="calculator_ingr_element">
                    <label htmlFor="salt" className="calculator_ingr_element_title">Sól na litr wody (gram)</label>
                    <input pattern="\d*" maxLength={2} placeholder="50" id="salt" className="calculator_ingr_element_input" type="text" />
                </div>
                <div className="calculator_ingr_element">
                    <label htmlFor="oil" className="calculator_ingr_element_title">Oliwa na litr wody (gram)</label>
                    <input pattern="\d*" maxLength={2} placeholder="30" id="oil" className="calculator_ingr_element_input" type="text" />
                </div>
            </div>
            <button className="calculator_button">OBLICZ PROPORCJE</button>
        </section>
    )
}
export {Calculator}