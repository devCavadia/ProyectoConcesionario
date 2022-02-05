import React, {useEffect, useState} from 'react';

//Realizar un formulario que le pida a un usuario su edad y le diga
// si el usuario es mayor de edad o no.

const Vehiculos = () => {

  const [nombreVehiculo, setNombreVehiculo] = useState("");
  const [edad, setEdad] = useState(0); 
  const [esMenorDeEdad, setEsMenorDeEdad] = useState(false); 
  const [mostrarCamposAdicionales, setMostrarCamposAdicionales] = useState(false);

  useEffect(()=>{
    if(edad>=18){
      setEsMenorDeEdad(false);
    }
    else{
      setEsMenorDeEdad(true);
    }
  }, [edad]);

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
          <label htmlFor="edad">
            Por favor ingrese su edad
            <input value={edad} onChange={(e)=>{setEdad(e.target.value)}} type="number" name='edad' className='border border-gray-600' />
          </label>
          {
          esMenorDeEdad ? (
          <span className=' text-3xl text-red-500'>
          Usted es menor de edad no puede hacer pagos
          </span> ) : (
          <span className=' text-3xl text-green-500'>
          Usted es mayor de edad si puede hacer pagos
          </span> )
          }
          <button onClick={()=>setMostrarCamposAdicionales(!mostrarCamposAdicionales)} type="button" className=" bg-indigo-500 text-white">
            Mostrar campos adicionales
          </button>
          {mostrarCamposAdicionales && (
            <div>
              <input className='border bg-gray-400 my-2 p-3' placeholder='dato nuevo' type="text" />
              <input className='border bg-gray-400 my-2 p-3' placeholder='dato nuevo' type="text" />
              <input className='border bg-gray-400 my-2 p-3' placeholder='dato nuevo' type="text" />
              <input className='border bg-gray-400 my-2 p-3' placeholder='dato nuevo' type="text" />
              <input className='border bg-gray-400 my-2 p-3' placeholder='dato nuevo' type="text" />
              <input className='border bg-gray-400 my-2 p-3' placeholder='dato nuevo' type="text" />
            </div>
          )}

      </form>
  );
};

export default Vehiculos;
