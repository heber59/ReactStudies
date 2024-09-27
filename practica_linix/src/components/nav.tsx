import React from 'react';

const NavComponent = () => {
  return (
    <nav className="flex flex-row bg-blue-300 p-4 text-white justify-between">
          <ul className='flex flex-row space-x-4'>
            <li ><a href="">Quienes Somos</a></li>
            <li ><a href="">Mejores Restaurantes</a></li>
          </ul>    
          <ul className='flex flex-row'>
            <li className=''><a href="">Crear Perfil</a></li>
          </ul>
        </nav>
  );
};

export default NavComponent;