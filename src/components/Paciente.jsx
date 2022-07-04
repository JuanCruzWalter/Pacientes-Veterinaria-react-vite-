


const Paciente = ({pacientes, setPaciente, eliminarPaciente}) => {

  

  const { Nombre, Propietario, Email, Alta, Sintomas, id } = pacientes  
  const handleEliminar = () => {
    const respuesta = confirm("deseas eliminar este paciente?");

    if(respuesta) {
        eliminarPaciente(id)
    }
  }


  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {" "}

          <span className="font-normal normal-case">{Nombre}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {" "}

          <span className="font-normal normal-case"> {Propietario} </span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Email: {" "}

          <span className="font-normal normal-case">{Email}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Fecha de alta del paciente: {" "}

          <span className="font-normal normal-case">{Alta}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {" "}

          <span className="font-normal normal-case">{Sintomas}</span>
        </p>

        <div className="flex justify-between">
          <button
            type="button"
            className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-md"
            onClick={ () => setPaciente(pacientes) }
          >Editar</button>

          <button
            type="button"
            className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-md"
            onClick={handleEliminar}
          >Eliminar</button>
        </div>


      </div>
  )
}

export default Paciente