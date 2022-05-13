import { useState, useEffect } from 'react'
import './App.css'
import Formulario from './components/Formulario'
import ListadoPacientes from './components/ListadoPacientes'
import Header from './components/Header'

function App() {

  const[clientes, setClientes] = useState([]);
  const[cliente,setcliente] = useState({});


  useEffect( ()=>{
    const obtenerLS = ()=>{
      const clinetesLS = JSON.parse(localStorage.getItem('clientes')) ?? [];
      setClientes(clinetesLS)
    }

    obtenerLS();
  }, []);

  useEffect(()=>{
    localStorage.setItem('clientes',JSON.stringify(clientes));
  },[clientes])



  const eliminarCliente = id=>{
      const ClientesActualizados = clientes.filter( cliente => cliente.id !== id);
      setClientes(ClientesActualizados)
  }

  return (
    <div className=" container mx-auto mt-20">
      <Header/>
      <div className=" mt-12 md:flex">
        <Formulario 
        clientes={clientes}
        setClientes={setClientes}
        cliente = {cliente}
        setcliente = {setcliente}
        />
        <ListadoPacientes
        
        clientes={clientes}
        setcliente={setcliente}
        eliminarCliente={eliminarCliente}

        />
      </div>
    </div>
  )
}

export default App
