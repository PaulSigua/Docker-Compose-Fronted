# Ventadas

Este proyecto se creo con el objetivo de realizar un pagina web de carrito de compras amigable para los usuarios enfocandonos en llevar un orden en los conponentes y servicios para cumplir con el objetivo propuesto. Este proyecto lleva implementado un estilo scss y html interactivo con los usuarios mediante el uso de herramientas como el side nav y el PWA.

# Principales caracteristicas

1. Crear una pagina responsiva y amigable para los usuarios

2. Implementacion de PWA y excepciones para controlar las acciones del usuario y mostrarle un enfoque mas profesional

3. Manejar un fronted implementado a traves del angular 17.2.0

4. Manejar servicios para la conexion del fronted con el backend

5. Crear un routing para la pagina a traves de firebase.

# Requisitos Previos

Instalacion de las siguientes herramientas

Node.js (versión recomendada: 14.x o superior)
Angular CLI (versión 17.2.0)
Firebase CLI (para despliegue y manejo de routing)

# Implementación de PWA
Para habilitar PWA en tu aplicación Angular, asegúrate de haber ejecutado:

bash
Copy code
ng add @angular/pwa
Esto configurará tu aplicación con los archivos necesarios para funcionar como una PWA, incluyendo el manifest y el service worker.

# Manejo de Errores
Implementa interceptores HTTP y servicios dedicados para manejar las excepciones y errores de forma centralizada. Esto permite mostrar mensajes de error amigables al usuario.

# Servicios para Backend
Utiliza el módulo HttpClient de Angular para consumir APIs y conectar con el backend. Crea servicios Angular que encapsulen las llamadas al API y su lógica.

# Routing con Firebase
Para configurar el routing de tu SPA (Single Page Application) con Firebase:

Configura las reglas de Firebase Hosting en firebase.json para redirigir todas las solicitudes a tu archivo index.html.
Utiliza el RouterModule de Angular para definir las rutas de tu aplicación.