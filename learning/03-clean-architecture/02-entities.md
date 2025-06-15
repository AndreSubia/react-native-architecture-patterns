# 🧩 Entities / Entidades

---

## 📝 Definition / Definición

Entities are the core business objects of the application.  
They encapsulate the essential rules and properties of the system, and are **independent of any frameworks or external dependencies**.  
They can be reused across different platforms (mobile, web, desktop) without change.


Las entidades son los objetos de negocio centrales de la aplicación.  
Encapsulan las reglas y propiedades esenciales del sistema, y son **independientes de cualquier framework o dependencia externa**.  
Pueden reutilizarse en diferentes plataformas (móvil, web, escritorio) sin modificarse.

---

## 📦 Role in Clean Architecture / Rol en la Arquitectura Limpia

Entities represent the **most inner layer** of Clean Architecture.  
They should remain stable and protected from UI or infrastructure changes.

Las entidades representan la **capa más interna** de la Arquitectura Limpia.  
Deben mantenerse estables y protegidas de cambios en la UI o en la infraestructura.

---

## [💡 See Example / Ver Ejemplo](../../src/domain/entities/Task.ts)
