import React from 'react';
import ImagenLogo from './ImagenLogo';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faCashRegister, faUser, faUsers } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
      <nav className=' w-72 border border-gray-300 flex flex-col bg-gray-200 p-4'>
        <Link to="/admin">
          <ImagenLogo />
        </Link>
        <div className='my-4'>
          <Ruta icono={faUser} ruta="/admin/perfil" nombre="Perfil" />
          <Ruta icono={faCar} ruta="/admin/vehiculos" nombre="Vehículos" />
          <Ruta icono={faCashRegister} ruta="/admin/ventas" nombre="Ventas" />
          <Ruta icono={faUsers} ruta="/admin/usuarios" nombre="Usuarios" />
        </div>
        <button>Cerrar sesión</button>
      </nav>
  );
};

const Ruta = ({ icono, ruta, nombre }) => {
  return (
    <Link to={ruta}>
      <button className='p-1 my-2 bg-indigo-700 hover:bg-indigo-900 flex w-full items-center text-white rounded-md'>
        <FontAwesomeIcon icon={icono} className="w-10" />
        {nombre}
      </button>
    </Link>
  );
};

export default Sidebar;
