# BunkerPhoneShop

## Descripción

BunkerPhoneShop es un sitio web de comercio electrónico desarrollado en ReactJs, especializado en la venta de smartphones y accesorios. Este proyecto educativo de Coderhouse integra características avanzadas de e-commerce y ofrece una experiencia de usuario rica y atractiva.

## Contenido/Tabla de Contenidos

- [Información General](#información-general)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Características](#características)
- [Contacto](#contacto)

## Información General

BunkerPhoneShop es un sitio web de e-commerce que permite a los usuarios explorar, seleccionar y comprar los últimos smartphones y accesorios del mercado. Ofrece una buena experiencia de usuario con funcionalidades como filtros de productos, login y registro de usuarios, gestión de carritos y un proceso de checkout en varios pasos.

## Características Principales

- **Navegación y Presentación de Productos**: La página principal incluye un carousel para promociones y un listado de categorías y productos, que cambian dinámicamente según la selección del usuario.
- **Secciones de Productos**: Secciones dedicadas a "Celulares", "Accesorios" y "Ofertas", con filtros y opciones de visualización.
- **Gestión de Usuarios**: Funcionalidad de registro e inicio de sesión con validación de datos y manejo de sesiones.
- **Carrito de Compras**: Funcionalidad para agregar productos al carrito, con visualización detallada, opción de vaciar el carrito y acceso al proceso de checkout.
- **Proceso de Checkout**: Un proceso de compra en cuatro pasos que incluye selección de productos, datos de envío, datos de pago y resumen de la compra.
- **Gestión de Órdenes**: Los usuarios pueden revisar sus órdenes pasadas y ver detalles como número de orden, productos incluidos, y más.

## Tecnologías Utilizadas y Justificación

- **ReactJs**: Para construir una interfaz de usuario interactiva y eficiente.
- **Node.js y MongoDB**: Utilizados para crear y manejar una API que gestiona los productos, ofreciendo un backend robusto y escalable.
- **Firebase**: Para la gestión de usuarios, carritos y órdenes, aprovechando su eficiencia en el manejo de datos en tiempo real y autenticación segura.
- **MUI (Material-UI)**: Para diseñar una interfaz de usuario estilizada y coherente.
- **Sass**: Para personalizaciones de diseño más detalladas.
- **React-router-dom**: Para una navegación fluida y eficiente dentro de la aplicación.
- **React-scroll-up**: Para mejorar la experiencia de usuario permitiendo un rápido retorno a la parte superior de la página.

## Estructura del Proyecto

- **Gestión de Productos**: Implementada en `getProducts.js`, permite la obtención de productos mediante una API desarrollada en Node.js y conectada a MongoDB.
- **Gestión de Usuarios**: Manejada en `users.js`, utiliza Firebase para registro, inicio de sesión y manejo de perfiles de usuario.
- **Gestión de Carritos**: En `carts.js`, gestiona los carritos de compras de los usuarios utilizando Firebase Firestore.
- **Gestión de Órdenes**: El archivo `orders.js` se encarga del manejo de órdenes de compra a través de Firebase Firestore.

## Contacto

Para más información o soporte, puedes contactar a Valentín Alvarez en valentinalvarez1998@gmail.com.
