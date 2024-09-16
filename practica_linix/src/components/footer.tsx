import React from 'react';

const Footer = () => {
    return (
        <footer className='h-16 border-t-2 p-4 border-blue-300 flex flex-row justify-between'>
            <ul className='flex flex-row space-x-4'>
                <li><a href="">Terminos Y Condiciones</a></li>
                <li><a href="">Trabaja Con Nosotros</a></li>
            </ul>
            <ul className='flex flex-row space-x-4'>
                <li><a href="">Ayudanos A Mejorar</a></li>
                <li><a href="">Eres Dueño De Un Restaurante?</a></li>
            </ul>
        </footer>
    );
};
export default Footer;