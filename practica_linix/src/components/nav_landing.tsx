import React from 'react';

const NavComponent = () => {
  return (
    <nav className="bg-blue-300 p-4 text-white">
          <ul className='flex space-x-3'>
          <li><a href="">Quienes Somos</a></li>
          <li><a href="">Mejores Restaurantes</a></li>
          <li><a href="">Crear Perfil</a></li>
          </ul>
        </nav>
  );
};

export default NavComponent;