import {useState, useEffect} from "react"
import Error from './Error'

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {

  const [Nombre, setNombre] = useState("");
  const [Propietario, setPropietario] = useState("");
  const [Email, setEmail] = useState("");
  const [Alta, setAlta] = useState("");
  const [Sintomas, setSintomas] = useState("");

  const [error, setError] = useState(false)

  useEffect( () => {
    if(Object.keys(paciente).length > 0){
      setNombre(paciente.Nombre)
      setPropietario(paciente.Propietario)
      setEmail(paciente.Email)
      setAlta(paciente.Alta)
      setSintomas(paciente.Sintomas)
    }

  },[paciente])

  const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36)

    return random + fecha  
  }


  const handleSubmit = (e) => {
    e.preventDefault();

    //validando formulario
    if([ Nombre, Propietario, Email, Alta, Sintomas].includes("") ){
      console.log("hay al menos un campo vacio");
      setError(true)
      return;
    } 
    setError(false)

    //objeto de pacientes para pasar por props
    const objetoPaciente = {
      Nombre,
      Propietario,
      Email,
      Alta,
      Sintomas,
     
    }

    if(paciente.id) {
      //editando registro
      objetoPaciente.id = paciente.id
      
      const pacientesActualizasos = pacientes.map ( pacienteState  => pacienteState.id === paciente.id ? objetoPaciente : pacienteState) 
      setPacientes(pacientesActualizasos)
      setPaciente({})

    } else {
      //nuevo registro
      objetoPaciente.id = generarId()
      setPacientes([...pacientes, objetoPaciente]);
    }

    
    //reiniciar el form
    setNombre("")
    setPropietario("")
    setEmail("")
    setAlta("")
    setSintomas("")
    
  }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento pacientes</h2>
      
      <p className="text-xl mt-5 text-center mb-10">
        Añade Pacientes y {" "}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>
      
      <form 
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-xl py-10 px-5 mb-10"
      >
        {error && <Error mensaje='Todo los campos son obligatorios'/> }
        <div className="mb-5">
          <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
            Nombre Mascota
          </label>
          
          <input
            id="mascota"
            type="text"
            placeholder="Nombre de la Mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={Nombre}
            onChange={ (e) => setNombre(e.target.value)}
            
          /> 
        </div>

        <div className="mb-5">
          <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">
            Nombre Propietario
          </label>
          
          <input
            id="propietario"
            type="text"
            placeholder="Nombre del Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={Propietario}
            onChange={ (e) => setPropietario(e.target.value)}
          /> 
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
            Email
          </label>
          
          <input
            id="email"
            type="email"
            placeholder="email contacto propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={Email}
            onChange={ (e) => setEmail(e.target.value)}
          /> 
        </div>

        <div className="mb-5">
          <label htmlFor="Alta" className="block text-gray-700 uppercase font-bold">
            Alta
          </label>
          
          <input
            id="alta"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={Alta}
            onChange={ (e) => setAlta(e.target.value)}
          /> 
        </div>

        <div className="mb-5">
          <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
            Sintomas
          </label>
          
          <textarea 
            id="sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe los Síntomas" 
            value={Sintomas}
            onChange={ (e) => setSintomas(e.target.value)}           
          />
        </div>

        <input 
          type="submit" 
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors rounded-md"
          value={ paciente.id ? "Editar Paciente" : "Agregar Paciente"} 
          
        />

      </form>
    </div>
  )
}

export default Formulario