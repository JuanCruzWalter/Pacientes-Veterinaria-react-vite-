import Paciente from "./Paciente"


const ListadoClientes = ({pacientes, setPaciente, eliminarPaciente}) => {

  
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

      {pacientes && pacientes.length ? (
      <>
        <h2 className="font-black text-3xl text-center">ListadoClientes</h2>
        <p className="text-xl mt-5 mb-10 text-center">
        Administra tus {" "}
        <span className="font-bold text-indigo-600">Pacientes y Citas</span>
        </p>

        { pacientes.map( (pacientes) => 
          (
            <Paciente
              key={pacientes.id}
              pacientes={pacientes}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
            />
          )
        )}
      </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay Pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
          Comienza a agregar pacientes y  {" "}
          <span className="font-bold text-indigo-600">Apareceran en este lugar</span>
          </p>
        </>
      )}


      
      

    </div>
  )
}

export default ListadoClientes