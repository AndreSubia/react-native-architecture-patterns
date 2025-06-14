# ✅ Frameworks & Drivers

The **Frameworks & Drivers** layer is the outermost layer of the Clean Architecture. It contains all the frameworks, tools, and external agents such as databases, UI frameworks, web frameworks, and devices.

This layer is where you implement details like React Native components, third-party libraries, database clients, or network libraries.

The key principle is that **this layer depends on the inner layers (use cases, entities, interface adapters), but not the other way around**. 

This separation allows the core business logic to stay independent of frameworks and external concerns, improving maintainability and testability.

## 🔄 Responsibilities:
- Implement user interfaces (React Native screens, components).
- Connect to external services (API clients, databases, push notifications).
- Configure and initialize third-party libraries and frameworks.

## 🧩 Examples of this layer in React Native apps:
- React Navigation setup
- Redux or Context providers
- Axios or fetch API for network requests
- Native modules and device APIs (camera, GPS, sensors)

---
# ✅ Frameworks & Drivers

La capa de **Frameworks y Drivers** es la capa más externa en la Arquitectura Limpia. Contiene todos los frameworks, herramientas y agentes externos como bases de datos, frameworks de UI, frameworks web y dispositivos.

En esta capa implementas detalles como componentes de React Native, librerías de terceros, clientes de bases de datos o librerías de red.

El principio clave es que **esta capa depende de las capas internas (casos de uso, entidades, adaptadores de interfaz), pero no al revés**.

Esta separación permite que la lógica de negocio central permanezca independiente de frameworks y preocupaciones externas, mejorando la mantenibilidad y la capacidad de pruebas.

## 🔄 Responsabilidades:
- Implementar interfaces de usuario (pantallas y componentes en React Native).
- Conectar con servicios externos (clientes API, bases de datos, notificaciones push).
- Configurar e inicializar librerías y frameworks de terceros.

## 🧩 Ejemplos de esta capa en apps React Native:
- Configuración de React Navigation
- Proveedores de Redux o Context
- Axios o fetch para solicitudes de red
- Módulos nativos y APIs de dispositivo (cámara, GPS, sensores)
