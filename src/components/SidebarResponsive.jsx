import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const SidebarResponsive = () => {
	const [mostrarNavegacion, setMostrarNavegacion] = useState(false);
  return (
    <div className='sm:hidden' onClick={() => {setMostrarNavegacion(!mostrarNavegacion)}}>
      <FontAwesomeIcon icon={mostrarNavegacion ? faXmark : faBars} className="mx-2 hover:text-yellow-600" />
			{mostrarNavegacion && 
			<ul className='bg-gray-900 '>
				<ResponsiveRoute nombre="Vehículos" ruta="/admin/vehiculos" />
				<ResponsiveRoute nombre="Ventas" ruta="/admin/ventas" />
				<ResponsiveRoute nombre="Usuarios" ruta="/admin/usuarios" />
			</ul>
			}
    </div>
  );
};

const ResponsiveRoute = ( { nombre, ruta } ) => {
	return(
		<Link to={ ruta }>
			<li className='text-gray-200 border border-gray-300 p-1'>
				{ nombre }
			</li>
		</Link>
	);
};

export default SidebarResponsive;
