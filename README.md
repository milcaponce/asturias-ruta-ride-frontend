#  Asturias Ruta & Ride – Frontend

Aplicación web desarrollada con **React** que permite a los usuarios explorar rutas de senderismo por Asturias, consultar su detalle, registrarse, verificar su cuenta mediante correo electrónico y autenticarse con JWT. El proyecto se integra con la API del backend del mismo nombre.

---

##  1. Descripción del proyecto

Este frontend proporciona una interfaz interactiva para visualizar rutas de senderismo en Asturias y gestionar usuarios mediante autenticación.  
Se conecta al backend para obtener datos en tiempo real, mostrar información de rutas y gestionar el flujo completo de registro, verificación por correo e inicio de sesión.

El objetivo del proyecto es ofrecer una experiencia accesible y visualmente atractiva para explorar rutas naturales, con acceso para usuarios registrados y no registrados.

---

##  2. Características principales

- Visualización de rutas con datos obtenidos desde el backend
- Página de detalle con información extendida de cada ruta
- Registro de usuario mediante formulario validado
- Verificación de email integrada con backend
- Inicio de sesión con JWT y persistencia de sesión
- Contexto global de autenticación (**AuthContext**) para gestionar sesión
- Logout y protección básica de navegación según estado del usuario
- Estilos con **TailwindCSS**
- Preparado para despliegue y expansión futura

---

##  3. Tecnologías utilizadas

| Categoría      | Tecnología                |
|----------------|---------------------------|
| Framework      | React 19 + Vite           |
| Estilos        | TailwindCSS               |
| Router         | react-router-dom          |
| Formularios    | react-hook-form           |
| Mapas          | Leaflet + react-leaflet   |
| Estado global  | React Context API         |
| Testing        | Vitest + Testing Library  |
| Linter         | ESLint                    |

---

##  4. Arquitectura del proyecto

Estructura basada en componentes y páginas, con separación por dominio:

```
src/
├── components/ # Componentes reutilizables (Header, UI, etc.)
├── context/ # AuthContext y provider
├── pages/ # Vistas principales (Home, Register, Login, etc.)
│ ├── auth/ # Páginas de autenticación
│ └── routes/ # Páginas relacionadas a rutas
├── services/ # Lógica de comunicación con el backend (HTTP fetch)
├── hooks/ # Custom hooks (si aplica)
├── assets/ # Imágenes, fuentes, iconos
├── App.jsx # Configuración de rutas
└── main.jsx # Render principal
```
---


##  5. Instalación y ejecución

###  Requisitos previos

- Node.js 18+
- npm o yarn
- Tener el backend corriendo localmente (recomendado en puerto 8080)

###  Instalación

```bash
npm install
```

###  Ejecutar en desarrollo

```bash
npm run dev
```

La aplicación estará disponible en:
http://localhost:5173

---

## 🔑 6. Variables de entorno

Crear un archivo `.env` en la raíz del proyecto para configurar el endpoint del backend:

```env
VITE_API_URL=http://localhost:8080/api/v1
```

En el código, se accede como:

```bash
import.meta.env.VITE_API_URL
```

---

##  7. Navegación y vistas

| Ruta            | Página           | Descripción                                     |
|-----------------|------------------|-------------------------------------------------|
| `/home`         | HomePage         | Página inicial con presentación                 |
| `/routes`       | RoutesPage       | Listado de rutas obtenidas desde el backend     |
| `/routes/:id`   | RouteDetailPage  | Detalle de cada ruta                            |
| `/register`     | RegisterPage     | Formulario de registro                          |
| `/verify-email` | VerifyEmailPage  | Validación del token enviado al correo          |
| `/login`        | LoginPage        | Autenticación con JWT                           |

---

##  8. Comunicación con el backend

La comunicación se realiza mediante `fetch` utilizando los endpoints del backend.

**Ejemplo de consumo:**

```js
const res = await fetch(`${import.meta.env.VITE_API_URL}/routes`);
```

El token JWT se guarda en `localStorage` y se consume mediante **AuthContext**.

---

##  9. Testing

El proyecto incluye **Vitest + Testing Library** para testear componentes y lógica.

**Ejecutar los tests:**

```bash
npm run test
```

**Modo interfaz:**

```bash
npm run test:ui
```

---

##  10. Mejoras pendientes / Roadmap

- Añadir vista de *Preguntas Frecuentes*
- Añadir favoritos por usuario (requiere endpoints)
- Proteger rutas del frontend según estado de autenticación
- Mostrar mapa con ubicación de cada ruta
- Soporte responsive avanzado y modo oscuro
- Página 404 personalizada
- Internacionalización (ES/EN)

---

## ✨ 11. Autoría

Proyecto desarrollado como parte del bootcamp **Full Stack Developer** en **Factoría F5 Asturias**.

**Autora:** Milca Ponce
