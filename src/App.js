import React from 'react';
// import logo from './logo.svg';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

import Cabecera from './componentes/Cabecera';
import Barra from "./componentes/Barra";
import CP from "./componentes/CuerpoPrincipal";
import CF from "./componentes/CuerpoFil";
import CI from "./componentes/CuerpoRes";
import CPL from "./componentes/CuerpoPol";
import CC from "./componentes/CuerpoCob";
import CA from "./componentes/CuerpoAreas";
import Tarjetas from "./componentes/Tarjetas";
import Pie from "./componentes/Pie";

class App extends React.Component{
  render(){
    return (
      <Router> 
        <div className="App">
          <Cabecera/>
          <Barra/>
          <Route path="/" exact component={CP} />
          <Route path="/filosofia" exact component={CF} />
          <Route path="/institucional" exact component={CI} />
          <Route path="/politica" exact component={CPL} />
          <Route path="/coberturas" exact component={CC} /> 
          <Route path="/areas" exact component={CA} />                 
          <Tarjetas/>
          <Pie/>    
        </div>
      </Router>
      );
  };
}

export default App;


//const App = () => <div>Hola!</div>;

/*
function App() {
  return (
    <div>Hola!</div>
  );
}
*/

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/