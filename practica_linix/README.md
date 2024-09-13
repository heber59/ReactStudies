 ## gusta o no gusta
 - he decidido que sera una pagina donde se podra calificar restaurantes

 ## Tecnologías: 

 - Autenticación: NextAuth.js.

 - Base de datos: Prisma (postgres SQL).
 - Estado global: Redux Toolkit.
 - Estilos: TailwindCSS probable scss .
 - Gestión de formularios: React Hook.
 - Google Maps Places API.
 ## Flujo
 - Autenticación:
    Un usuario se registra o inicia sesión (puedes usar NextAuth o Firebase Auth para gestionar esto).
 - Buscar restaurantes:
    El usuario puede buscar restaurantes por nombre a través de un campo de texto.
    También puede buscar restaurantes cercanos a su ubicación actual o en un área específica usando un mapa interactivo (usando Google Maps API).
 - Calificar restaurantes:
    Cada restaurante se puede decidir entre "me gusta" o "no me gusta". El estado de esta acción se guarda en la base de datos, junto con la identificación del usuario y del restaurante.
  - Ver detalles del restaurante:
    El usuario puede hacer clic en un restaurante para ver más detalles, como la dirección, calificación general, y si es posible, un menú o fotos.

    # Estructura del Proyecto

|   proyecto/
|   ├── src/
|   │   ├── app/
|   │   ├── restaurant/      -Lógica relacionada con los restaurantes
|   │   │   └── api/       
|   │   ├── search/         - Funcionalidades de búsqueda
|   │   │   └── api/      
|   │   ├── components/     - Componentes reutilizables
   │   ├── api/             - Rutas API generales
|   │   │   ├── auth/        - Rutas relacionadas con autenticación
|   │   │   ├──restauran/   - Rutas API de restaurantes
|   │   │   └── search/      - API de búsqueda
|   │   ├── services/        - Integrar API externas y lógica backend
|   │   ├── lib/             - Funciones utilitarias y helpers
|   │   ├── store/           - Estado global de la aplicación           
|   │   ├── hooks/           - Hooks personalizados            
|   │   ├── middlewares/     - Middlewares            
|   │   ├── styles/          - Archivos de estilos
|   │   └── prisma/          - Esquemas de la base de datos



gracias  IA :) ;
### Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
