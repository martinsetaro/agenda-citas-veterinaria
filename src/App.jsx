import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"
import {useState,useEffect} from 'react';



function App() {

  const [pacientes,setPacientes] = useState([]);
  const [paciente,setPaciente]=useState({});

  useEffect(()=>{
const obtenerLs = ()=>{
  const pacientesLs = JSON.parse(localStorage.getItem('pacientes')) ?? [];
  setPacientes(pacientesLs);
}
obtenerLs();
  },[]);

  


  useEffect(()=>{
   
   localStorage.setItem('pacientes',JSON.stringify(pacientes));

  },[pacientes])



  const eliminarPaciente = (id)=>{
    const nuevoPaciente = pacientes.filter ( paciente => paciente.id != id);
    setPacientes(nuevoPaciente);
  }
  
  return (
    <div className="container mx-auto mt-18">
     <Header/>
     <div className="mt-12 md:flex">
      <Formulario
      setPacientes={setPacientes}
      pacientes = {pacientes}
      paciente={paciente}
      setPaciente={setPaciente}
      
      />
     <ListadoPacientes
     pacientes={pacientes}
     setPaciente={setPaciente}
     eliminarPaciente={eliminarPaciente}
     />
     </div>
     
    </div>
  )
}

export default App
