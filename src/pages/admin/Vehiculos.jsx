import React, { useEffect, useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Vehiculos = () => {
  const [mostrarTabla, setMostrarTabla] = useState(true);
  const [vehiculos, setVehiculos] = useState([]);
  const [textoBoton, setTextoBoton] = useState("Crear nuevo vehiculo");
  const [colorBoton, setColorBoton] = useState('bg-indigo-500');

  
  useEffect(()=>{
    //obtener lista de vehiculos desde el backend
    const vehiculosBackend = [
      {
        nombre: "Corolla",
        marca: "Toyota",
        modelo: 2014
      },
      {
        nombre: "Sandero",
        marca: "Renault",
        modelo: 2020
      },
      {
        nombre: "Duster",
        marca: "Renault",
        modelo: 2018
      },
      {
        nombre: "Mazda 3",
        marca: "Mazda",
        modelo: 2012
      },
      {
        nombre: "Captiva",
        marca: "Toyota",
        modelo: 2021
      },
      {
        nombre: "Onix",
        marca: "Chevrolet",
        modelo: 2021
      }
    ];
    setVehiculos(vehiculosBackend);
  }, []);

  useEffect(()=>{
    if(mostrarTabla){
      setTextoBoton("Crear nuevo vehiculo");
      setColorBoton('bg-indigo-500');
    }
    else{
      setTextoBoton("Mostrar todos los vehiculos");
      setColorBoton('bg-green-500');
    }
  }, [mostrarTabla]);


  return (
    <div className='flex h-full w-full flex-col items-center justify-start p-8'>
      <div className='flex flex-col'>
        <h2 className=' text-3xl font-extrabold text-gray-900'>Página de administración de vehículos</h2>      
        <button onClick={()=>{setMostrarTabla(!mostrarTabla)}} className={`text-white ${colorBoton} p-5 rounded-full m-6 w-40 self-end`}>{textoBoton}</button>
        {mostrarTabla ? (<TablaVehiculos listaVehiculos={vehiculos}/>
        ) : (
          <FormCreacionVehiculos 
            setMostrarTabla={setMostrarTabla}
            listaVehiculos={vehiculos}
            setVehiculos={setVehiculos}
           />
        )}
        <ToastContainer position="top-right" autoClose={5000} />
      </div>
    </div>
  );
};

const TablaVehiculos = ({listaVehiculos}) => {
  return(
    <div className=' flex flex-col items-center justify-center'>
      <h2 className=' text-2xl font-extrabold text-gray-800'>Todos los vehículos</h2>
      <div>
        <thead>
          <tr>
            <th>Nombre del vehiculo</th>
            <th>Marca del vehiculo</th>
            <th>Modelo del vehiculo</th>
          </tr>
        </thead>
        <tbody>
          {listaVehiculos.map((vehiculo)=>{
            return(
              <tr>
                <td>{vehiculo.nombre}</td>
                <td>{vehiculo.marca}</td>
                <td>{vehiculo.modelo}</td>
              </tr>
            );
          })}
        </tbody>
      </div>
    </div>
  );
};

const FormCreacionVehiculos = ({ setMostrarTabla, listaVehiculos, setVehiculos }) => {
  const form = useRef(null);

  const submitForm = (e) =>{
    e.preventDefault();
    const fd = new FormData(form.current);

    const nuevoVehiculo = {};
    fd.forEach((value, key)=>{
      nuevoVehiculo[key]=value;
    });
    
    setMostrarTabla(true);
    setVehiculos([...listaVehiculos, nuevoVehiculo]);
    //Identificar el caso de éxito y mostrar un toast de éxito
    toast.success("Vehículo agregado con éxito");
    //Identificar el caso de error y mostrar un toast de error
    //toast.success("Error creando un vehículo");
  };

  return(
    <div className='flex flex-col items-center justify-center'>
      <h2 className=' text-2xl font-extrabold text-gray-800'>Crear nuevo vehículo</h2>
      <form ref={form} onSubmit={submitForm} className='flex flex-col'>
        <label className='flex flex-col' htmlFor="nombre">
          Nombre del Vehiculo
          <input 
            name='nombre'
            className=' bg-gray-50 border border-gray-600 p-2 rounded-lg m-2' 
            type="text"
            placeholder='Corolla' 
            required
          />
        </label>
        <label className='flex flex-col' htmlFor="marca">
          Marca del Vehiculo
          <select 
            name='marca' 
            className=' bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
            required
            defaultValue={0}
          >
            <option disabled value={0}>Seleccione una opción</option>
            <option>Renault</option>
            <option>Toyota</option>
            <option>Ford</option>
            <option>Mazda</option>
            <option>Chevrolet</option>
          </select>
        </label>
        <label className='flex flex-col' htmlFor="modelo">
          Modelo del Vehiculo
          <input 
            name='modelo'
            className=' bg-gray-50 border border-gray-600 p-2 rounded-lg m-2' 
            type="number"
            min={1992}
            max={2022}
            placeholder='2014' 
            required
          />
        </label>
        <button 
          type='submit'
          className=' col-span-2 bg-green-400 p-2 rounded-full shadow-md hover:bg-green-700 text-white'
        >Guardar vehiculo</button>
      </form>
    </div>
  );
};

export default Vehiculos;
