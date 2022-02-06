import React, {useEffect, useState} from 'react';

const Vehiculos = () => {

  const [mostrarTabla, setMostrarTabla] = useState(true);
  const [vehiculos, setVehiculos] = useState([]);
  const [textoBoton, setTextoBoton] = useState("Crear nuevo vehiculo");

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

  useEffect(()=>{
    //obtener lista de vehiculos desde el backend
    setVehiculos(vehiculosBackend);
  }, []);

  useEffect(()=>{
    if(mostrarTabla){
      setTextoBoton("Crear nuevo vehiculo");
    }
    else{
      setTextoBoton("Mostrar todos los vehiculos");
    }
  }, [mostrarTabla]);


  return (
    <div className='flex h-full w-full flex-col items-center justify-start p-8'>
      <div className='flex flex-col'>
        <h2 className=' text-3xl font-extrabold text-gray-900'>Página de administración de vehículos</h2>      
        <button onClick={()=>{setMostrarTabla(!mostrarTabla)}} className='text-white bg-indigo-500 p-5 rounded-full m-6 w-40 self-end'>{textoBoton}</button>
        {mostrarTabla ? <TablaVehiculos listaVehiculos={vehiculos}/> : <FormCreacionVehiculos/>}
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

const FormCreacionVehiculos = () => {
  return(
    <div className='flex flex-col items-center justify-center'>
      <h2 className=' text-2xl font-extrabold text-gray-800'>Crear nuevo vehículo</h2>
      <form className='grid grid-cols-2'>
        <input className=' bg-gray-50 border border-gray-600 p-2 rounded-lg m-2' type="text" />
        <input className=' bg-gray-50 border border-gray-600 p-2 rounded-lg m-2' type="text" />
        <input className=' bg-gray-50 border border-gray-600 p-2 rounded-lg m-2' type="text" />
        <input className=' bg-gray-50 border border-gray-600 p-2 rounded-lg m-2' type="text" />
        <button className=' col-span-2 bg-green-400 p-2 rounded-full shadow-md hover:bg-green-700 text-white'>Guardar vehiculo</button>
      </form>
    </div>
  );
};

export default Vehiculos;
