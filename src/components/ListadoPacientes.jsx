import Paciente from "./Paciente"
import { useEffect } from "react"

const ListadoPacientes = ({clientes, setcliente, eliminarCliente}) => {


  return (
    <div className=" md:w-1/2 lg:w-3/5 h-screen overflow-y-scroll md:h-screen mt-20 md:mt-0">

      {clientes && clientes.length ? (

        <div>
          <h2 className=" font-black text-3xl text-center">Seguimiento clientes</h2>
        <p className=" text-xl mt-5 text-center mb-5">Administra tus <span className=" text-indigo-500"> clientes y proyectos</span></p>
        {clientes.map( (cliente)=>(
           <Paciente 
           key ={cliente.id}
           cliente={cliente}
           setcliente={setcliente}
           eliminarCliente={eliminarCliente}
           />
          ))}
        </div>

      ): (
        <>
        <h2 className=" font-black text-3xl text-center">Estamos al dìa sin tareas</h2>
        <p className=" text-xl mt-5 text-center mb-5">Recuerda disfrutar tu día <span className=" text-indigo-500"> Raku</span></p>
        </>
      )}

      
      
    </div>
  )
}

export default ListadoPacientes
