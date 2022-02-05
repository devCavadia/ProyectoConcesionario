import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
      <div className=' flex flex-col w-full justify-center items-center'>
        <h2 className=' m-3 text-center text-xl font-extrabold text-gray-900'>
          Inicia sesión en tu cuenta
        </h2>
        <form className=' mt-8 max-w-md'>
          <div>
            <input className='w-full appearance-none px-3 py-2 border border-gray-300
             focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-900 rounded-md' 
             type="email" placeholder='dcs@correo.com' required />
            <input className='w-full appearance-none px-3 py-2 border border-gray-300
             focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-900 rounded-md' 
             type="password" required />
          </div>
          <div className=' flex justify-between'>
            <div>
              <label htmlFor='remUsuario'>
                <input type="checkbox" name='remUsuario'/>
                Recordar usuario
              </label>
            </div>
            <div>
              <Link to='/'>
                ¿Olvidaste tu contraseña?
              </Link>
            </div>
          </div>
          <div>
            <Link to='/admin'>
              <button type='submit'>Iniciar sesión</button>
            </Link>
          </div>
          <div>O</div>
          <div>
            <button>Continua con google</button>
          </div>
        </form>
      </div>
  );
};

export default Login;
