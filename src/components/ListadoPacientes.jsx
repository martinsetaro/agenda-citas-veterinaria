import Paciente from "./Paciente"
import {useEffect} from 'react';

Paciente

const ListadoPacientes = ({pacientes,setPaciente,eliminarPaciente}) => {





  return (
    <div className="md:w-1/2 lg:w-3/4 md:h-screen overflow-scroll">

      {pacientes.length === 0 ? (
        <>
        <h2 className="font-black text-2xl text-center">No hay pacientes registrados</h2>
        <p className="text-xl mt-5 mb-10 text-center">
          Comienza agregar {''}
          <span className="text-indigo-600 font-bold">tus Pacientes y Citas</span>
       </p>
        </>
      ) : (
        <>
        <h2 className="font-black text-2xl text-center">Listado de pacientes</h2>
        <p className="text-xl mt-5 mb-10 text-center">
          Administra tus {''}
          <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
       </p>
       {pacientes.map((pacient)=>{
        return(
            <Paciente
           key={pacient.id}
            paciente={pacient}
            setPaciente={setPaciente}
            eliminarPaciente={eliminarPaciente}
            />
        )
       })}
        
        </>
      )}

        
       
       
      
      
      

    </div>
  )
}

export default ListadoPacientes