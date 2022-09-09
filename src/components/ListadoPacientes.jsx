import Paciente from "./Paciente"

Paciente

const ListadoPacientes = () => {





  return (
    <div className="md:w-1/2 lg:w-2/5 md:h-screen overflow-scroll">

        <h2 className="font-black text-2xl text-center">Listado de pacientes</h2>
        <p className="text-xl mt-5 mb-10 text-center">
          Administra tus {''}
          <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
       </p>
       <Paciente/>
       <Paciente/>
      
      
      

    </div>
  )
}

export default ListadoPacientes