
const Paciente = ({cliente, setcliente,eliminarCliente}) => {
    const {nombre,empresa,email,numero,entrega,comentarios,id} = cliente

    const handleEliminar = () =>{
        const respuesta = confirm('deseas eliminar este cliente');

        if (respuesta) {
            eliminarCliente(id)
        }
    }

  return (

      <div className=" m-3 bg-white shadow-md px-5 py-10 rounded-xl">
      
        <div className=" border-2 border-gray-400 rounded-lg py-5 px-5 shadow-lg">
        <p className=" font-bold text-gray-700 uppercase mb-1">Nombre:{' '}
              <span className=" font-normal normal-case">{cliente.nombre}</span>
          </p>

          <p className=" font-bold text-gray-700 uppercase mb-1">Nombre de empresa:{' '}
              <span className=" font-normal normal-case">{cliente.empresa}</span>
          </p>

          <p className=" font-bold text-gray-700 uppercase mb-1">Email:{' '}
              <span className=" font-normal normal-case">{cliente.email}</span>
          </p>

          <p className=" font-bold text-gray-700 uppercase mb-1">Numero celular:{' '}
              <span className=" font-normal normal-case">{cliente.numero}</span>
          </p>
          <p className=" font-bold text-gray-700 uppercase mb-1">Fecha de entrega:{' '}
              <span className=" font-normal normal-case">{cliente.entrega}</span>
          </p>
          <p className=" font-bold text-gray-700 uppercase mb-1">Comentarios:{' '}
              <span className=" font-normal normal-case">{cliente.comentarios}</span>
          </p>
        </div>

        <div className=" flex mt-10 justify-between border-2 py-8 px-8 border-gray-400 rounded-lg  shadow-md">
            <button className=" py-2 px-10 bg-indigo-500 hover:bg-indigo-700 text-white font-bold rounded-lg" type="button"
            onClick={()=> setcliente(cliente)}
            >Editar</button>
            <button className=" py-2 px-10 bg-red-500 hover:bg-red-600 text-white font-bold rounded-lg" 
            onClick={handleEliminar}
            type="button">Eliminar</button>
        </div>

      </div>
   
  )
}

export default Paciente
