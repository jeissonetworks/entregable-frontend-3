// El componente App es el padre de:
// - Cabecera
// - Listado
// ESTADO: App debe manejar en su estado un número para contabilizar el total de elementos comprados.
// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Item.
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos.
import './index.css';
import { getData } from "./components/data.js";
import Cabecera from './components/Cabecera.js';
import Listado from './components/Listado.js';
import { useState } from 'react'

function App() {
  const data = getData()
  const [Items, setItems] = useState(0)    
  const add = () =>{     setItems(Items+1) 
  }
  return (
    <div className="App">
        
        <Cabecera Items={Items}/>       
        <Listado contador={add} data={data}/>
    </div>
  );
}

export default App;
