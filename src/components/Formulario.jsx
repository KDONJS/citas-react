import {useState, useEffect} from "react"
import Error from "./Error"
import Paciente from "./Paciente";


const Formulario = ({clientes, setClientes, cliente, setcliente}) => {

    const [nombre, setNombre] = useState('');
    const [empresa, setEmpresa] = useState('');
    const [email, setEmail] = useState('');
    const [numero, setNumero] = useState('');
    const [entrega, setEntrega] = useState('');
    const [comentarios, setComentarios] = useState('');

    const [error , setError] = useState(false);

    useEffect(()=>{
        if (Object.keys(cliente).length > 0) {
            setNombre(cliente.nombre)
            setEmpresa(cliente.empresa)
            setEmail(cliente.email)
            setNumero(cliente.numero)
            setEntrega(cliente.entrega)
            setComentarios(cliente.comentarios)
        }
    },[cliente])


    const generarId = () =>{
        const random = Math.random().toString(36).substr(2);
        const fecha = Date.now().toString(36)

        return random + fecha
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //validacion de formulario
        if([nombre,empresa,email,numero,entrega,comentarios].includes('')){
            setError(true)
            return;
        }
        setError(false)
        //objeto de paciente

        const objetoClientes = {
            nombre,
            empresa,
            email,
            numero,
            entrega,
            comentarios
            
        }

        if (cliente.id) {
            //editando
            objetoClientes.id = cliente.id

            const ClientesActualizados = clientes.map( clienteState => clienteState.id === cliente.id ? objetoClientes: clienteState )
            setClientes(ClientesActualizados)
            setcliente({})
        }else{
            //nuevo
            objetoClientes.id = generarId()
            setClientes([...clientes, objetoClientes]);
        }


        //reiniciar el form

        setNombre('')
        setEmpresa('')
        setEmail('')
        setNumero('')
        setEntrega('')
        setComentarios('')
    }

  return (
    <div className=" md:w-1/2 lg:w-2/5 mx-3">
       <h2 className=" font-black text-3xl text-center">Seguimiento clientes</h2>
        <p className="text-xl mt-5 text-center mb-5">Agrega Clientes {' '} <span className=" text-indigo-400">Administralos</span></p>
        <form action="" className=" bg-white shadow-lg rounded-xl py-10 px-5" onSubmit={handleSubmit}>
            {error && <Error>Recuerda que todos los campos deben estar llenos</Error> }
            <div className=" mb-5">
                <label className=" block text-gray-700 font-bold" htmlFor="nombre">Nombre cliente</label>
                <input id="nombre" name="nombre" className=" border-2 rounded-lg w-full p-2 placeholder-indigo-400 shadow mt-2" type="text"  placeholder="nombre del cliente" 
                value={nombre} onChange={ (e)=>setNombre(e.target.value)} />
            </div>
            <div className=" mb-5">
                <label className=" block text-gray-700 font-bold" htmlFor="empresa">Nombre de empresa</label>
                <input id="empresa" name="empresa" className=" border-2 rounded-lg w-full p-2 placeholder-indigo-400 shadow mt-2" type="text"  placeholder="nombre de la empresa"         value={empresa} onChange={ (e)=>setEmpresa(e.target.value)} />
            </div>
            <div className=" mb-5">
                <label className=" block text-gray-700 font-bold" htmlFor="email">Email</label>
                <input id="email" name="email" className=" border-2 rounded-lg w-full p-2 placeholder-indigo-400 shadow mt-2" type="email"  placeholder="Correo de contacto"  value={email} onChange={ (e)=>setEmail(e.target.value)} />
            </div>
            <div className=" mb-5">
                <label className=" block text-gray-700 font-bold" htmlFor="numero">Numero celular</label>
                <input id="numero" name="numero" className=" border-2 rounded-lg w-full p-2 placeholder-indigo-400 shadow mt-2" type="number"  placeholder="Numero celular"   value={numero} onChange={ (e)=>setNumero(e.target.value)} />
            </div>
            <div className=" mb-5">
                <label className=" block text-gray-700 font-bold" htmlFor="entrega">Fecha de entrega</label>
                <input id="entrega" name="entrega" className=" border-2 rounded-lg w-full p-2 placeholder-indigo-400 shadow mt-2" type="date"  value={entrega} onChange={ (e)=>setEntrega(e.target.value)} />
            </div>
            <div className=" mb-5">
                <label className=" block text-gray-700 font-bold" htmlFor="comentarios">Comentarios</label>
                <textarea className=" w-full border-2 rounded-l p-2 placeholder-indigo-400" placeholder="Comentarios" name="comentarios" id="comentarios" cols="30" rows="10"  value={comentarios} onChange={ (e)=>setComentarios(e.target.value)} ></textarea>
            </div>

            <input type="submit" 
            className=" bg-indigo-600 w-full hover:bg-indigo-500 cursor-pointer transition-all p-3 text-white uppercase font-bold rounded-lg " 
            value={cliente.id ?'Editar Registro':'Agregar Registro'}/>
        </form>
    </div>
  )
}

export default Formulario
