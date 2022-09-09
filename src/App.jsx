import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"
import {useState} from 'react';



function App() {

  const [pacientes,setPacientes] = useState([]);
  
  return (
    <div className="container mx-auto mt-18">
     <Header/>
     <div className="mt-12 md:flex">
      <Formulario
      setPacientes={setPacientes}
      pacientes = {pacientes}
      
      />
     <ListadoPacientes/>
     </div>
     
    </div>
  )
}

export default App