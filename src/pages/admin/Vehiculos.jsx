import React, {useEffect, useState} from 'react';

const Vehiculos = () => {

  const [nombreVehiculo, setNombreVehiculo] = useState("");  

  useEffect(() => {
    console.log('Hola, soy un effect que se ejecuta solo una vez cuando la pagina se renderiza, porque tiene el array de dependencias vacio');
    //paso 2
    //paso 3
    //paso 4
  }, []);

  useEffect(() => {
    console.log('Este useEffect se ejecuta cuando se le da el onClick');
    console.log('El valor de la variable es: ', nombreVehiculo);
  }, [nombreVehiculo]);

  const enviarDatosAlBackend = () =>{
    console.log("El valor de la variable nombreVehiculo es: ", nombreVehiculo);
  }

  return (
      <form className='flex flex-col'>
          <h2>Formulario de creación de vehículos</h2>
          <input onChange={(e) => {setNombreVehiculo(e.target.value)}} type="text" placeholder='Nombre del vehículo'/>
          <input onChange={(e) => {console.log("marca: ", e.target.value)}} type="text" placeholder='Marca del vehículo'/>
          <input type="text" placeholder='Modelo del vehículo'/>
          <input type="text" />
          <input type="text" />
          <button type='button' onClick={enviarDatosAlBackend} className=' bg-indigo-500 text-white'>Enviar datos</button>
      </form>
  );
};

export default Vehiculos;
