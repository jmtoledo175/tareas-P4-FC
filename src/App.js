import "./App.css";
import logo from "./img/check.svg";

import ListaDeTareas from "./components/ListaDeTareas";
function App() {
  return (
    <div className="aplicacion-tareas">
      <div className="logo-contenedor">
        <img src={logo} className="logo" />
      </div>
      <div className="tareas-lista-principal">
        <h1>Mis tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
