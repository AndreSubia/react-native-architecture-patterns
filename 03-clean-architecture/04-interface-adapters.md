# ✅ Interface Adapters

The **Interface Adapters** layer is responsible for transforming data between the domain (use cases and entities) and the external world (such as the user interface, APIs, and databases).

This layer ensures that the **core business logic remains independent of frameworks, databases, or UI implementations**.

Interface adapters implement **input and output boundaries** (interfaces) defined by the use cases, and provide concrete implementations that adapt framework-specific behavior.

## 🔄 Responsibilities:
- Adapt input data from the UI or controllers to fit use case requirements.
- Adapt output data from use cases into formats the UI can use.
- Implement repositories that interact with data sources (e.g., REST APIs, local storage).

## 🧩 Common components:
- Controllers
- Presenters
- View models
- Repository implementations

---

# ✅ Adaptadores de Interfaz

La capa de **Adaptadores de Interfaz** es responsable de transformar los datos entre el dominio (casos de uso y entidades) y el mundo externo (como la interfaz de usuario, APIs o bases de datos).

Esta capa garantiza que la **lógica de negocio central permanezca independiente de frameworks, bases de datos o implementaciones específicas de UI**.

Los adaptadores de interfaz implementan las **interfaces de entrada y salida** definidas por los casos de uso, y proveen implementaciones concretas que adaptan el comportamiento del framework.

## 🔄 Responsabilidades:
- Adaptar los datos de entrada desde la UI o controladores para que encajen con los casos de uso.
- Adaptar los datos de salida desde los casos de uso a un formato útil para la UI.
- Implementar repositorios que interactúan con fuentes de datos (como APIs REST o almacenamiento local).

## 🧩 Componentes comunes:
- Controladores
- Presentadores
- View models
- Implementaciones de repositorios
