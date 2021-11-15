import React from "react";
import  ReactDOM from "react-dom";
import { BrowserRouter, HashRouter } from "react-router-dom";
import {Game} from "./game";
import Home from "./home";
import {Route,Routes} from 'react-router'

const notFound = () => {
    return(
            <div>
                <h2>
                    Sayfa Bulunamadı: 404</h2>
                    <p>
                        Hata: Aradığınız Sayfaya Şu anda Ulaşılamıyor. Lütfen Daha Sonra Tekrar Deneyiniz
                    </p>
            </div>
    )
}

class App extends React.Component{

   render() {
       return(
           <HashRouter>
           <Routes>
               <Route exact path='/game' element={<Game/>}/>
               <Route exact path='/' element={<Home/>}/>
               <Route path='*' element={notFound()}/>
           </Routes>
           </HashRouter>
       )
   }
}
ReactDOM.render(<App />, document.getElementById("root"));

