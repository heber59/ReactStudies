import React from 'react';

const Footer = () => {
    return (
        <footer className='h-16 border-t-2 p-4 border-blue-300 flex flex-row justify-between'>
            <ul className='flex flex-row space-x-4'>
                <li className='pr-2 border-r-2 border-[rgb(var(--border-grey))]'><a href="">Terminos Y Condiciones</a></li>
                <li className='pr-2 border-r-2 border-[rgb(var(--border-grey))]'><a href="">Trabaja Con Nosotros</a></li>
            </ul>
            <ul className='flex flex-row space-x-4'>
                <li className='pr-2 border-r-2 border-[rgb(var(--border-grey))]' ><a href="">Ayudanos A Mejorar</a></li>
                <li className=''><a href="">Eres Dueño De Un Restaurante?</a></li>
            </ul>
        </footer>
    );
};
export default Footer;