import React from "react"
import Blog from "./Components/Blog";

function App() {
  //inicializacion
  const [state, setState] = React.useState();
  const [state2, setState2] = React.useState();

  //actualizacion
  function handleChange(e) {
    const {value} = e.target;
    if (value.length < 5) {
      setState2("State2", value)
    } else {
      setState("State", value)
    }
  }


  return (
  <React.Fragment>
      {/* lectura */}
      <Blog 
        textoTitulo="Este es mi titulo 1" 
        textoContenido={state ? state : state2}/>
        {/* si state existe manda state, si no manda state 2 */}

      <p style={{paddingLeft: 30}}>Ingrese algo por favor... </p>
      <input 
        style={{paddingLeft: 30}} 
        name="inputReact"
        onChange={handleChange}
      />

      <Blog 
        textoTitulo={state}
        textoContenido="Este es mi contenido 2"/>

      <Blog 
        textoTitulo={state}
        textoContenido={state}/>
  </React.Fragment>
  );
}

export default App;
