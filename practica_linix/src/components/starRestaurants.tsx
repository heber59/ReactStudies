import React from "react";

const StaredRestaurants = () => {
    interface Restaurants{
        name: string;
        qualification: number;
        image: string; 
    }
    const getRestaurants = async (): Promise< Restaurants[]> => {
        try{
            const answer = await fetch('https://comelones.co/stared', {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json'
                }
              });
              if (!answer.ok) {
                throw new Error(`Error al obtener los datos: ${answer.status}`);
              }
              const datos: Restaurants[] = await answer.json();
              return datos.map(restaurante => ({
                name: restaurante.name,
                qualification: restaurante.qualification,
                image: restaurante.image
              }));
            } catch (error) {
                console.error('Error obteniendo los datos:', error);
                return []; // Devolver un array vacío en caso de error
              }
            };
    let restaurants: Restaurants[] = [];
    // Llamada a la función para obtener los datos del backend
    getRestaurants().then(datos => {
    restaurants = datos; // Mostramos los datos obtenidos
    });
    return (
        <article>
            <Image href="Restaurants.img" alt="image of the restaurant"/>
            
            <h1>restaurants.name</h1>
            
        </article>
    );
            
};

export default StaredRestaurants;
