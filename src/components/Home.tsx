import { useState } from "react"
import { Calculator } from "./Calculaor";
import { Recipes } from "./Recipes";

const Home = () =>{
    const [page, setPage] = useState(0);

    const setPageClic = (index) =>{
        setPage(index);
        
    }
    return(
        <section className="home">
            <div className="home_wrapper">
                <h1 className="home_wrapper_title">KALKULATOR PIZZY</h1>
                <div className="home_wrapper_buttons">
                    <button onClick={()=>setPageClic(0)} className={`home_wrapper_buttons_button ${page === 0 ? "active" : ""}`}>STWÓRZ PIZZE</button>
                    <button onClick={()=>setPageClic(1)} className={`home_wrapper_buttons_button ${page === 1 ? "active" : ""}`}>GOTOWE PRZEPISY</button>
                </div>
                {page === 0 ? <Calculator /> : <Recipes/>}
            </div>
        </section>
    )
}
export {Home}