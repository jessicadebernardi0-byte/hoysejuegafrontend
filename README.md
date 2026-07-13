# ⚽ Hoy Se Juega - Frontend

Frontend de la plataforma **Hoy Se Juega**, desarrollada con React + Vite.

La aplicación permite a los usuarios buscar complejos deportivos, consultar disponibilidad, reservar canchas y administrar sus reservas mediante una interfaz moderna, responsive e intuitiva.

---

# 🚀 Tecnologías utilizadas

- React 19
- Vite
- React Router DOM
- Axios
- CSS3
- Context API

---

# 📁 Estructura del proyecto

src/
│
├── api/
│ ├── adminApi.js
│ ├── authApi.js
│ ├── complejoApi.js
│ ├── dashboardApi.js
│ ├── reservasApi.js
│ └── usuariosApi.js
│
├── assets/
│ └── images/
│
├── components/
│ ├── home/
│ ├── layout/
│ └── ui/
│
├── context/
│ └── AuthContext.jsx
│
├── data/
│ └── complejos.js
│
├── pages/
│ ├── Home.jsx
│ ├── Login.jsx
│ ├── Register.jsx
│ ├── Complejos.jsx
│ ├── Reservas.jsx
│ ├── Perfil.jsx
│ └── Admin.jsx
│
├── routes/
│ └── ProtectedRoute.jsx
│
├── services/
│ └── authService.js
│
├── styles/
│ └── styles.css
│
├── App.jsx
└── main.jsx

---

# ⚙️ Instalación

Clonar el repositorio

```bash
git clone https://github.com/usuario/hoy-se-juega-frontend.git
```

Ingresar al proyecto

```bash
cd FRONTEND
```

Instalar dependencias

```bash
npm install
```

Ejecutar

```bash
npm run dev
```

La aplicación quedará disponible en

```
hoysejuegafrontend.vercel.app
```

---

# Funcionalidades

✅ Registro de usuarios

✅ Inicio de sesión

✅ Autenticación mediante JWT

✅ Context API para gestión del usuario

✅ Consulta de complejos deportivos

✅ Disponibilidad simulada de canchas

✅ Creación de reservas

✅ Panel de administración

✅ Interfaz responsive

---

# Conexión con Backend

La aplicación consume la API REST ubicada en:

```
https://hoysejuegabackend-1.onrender.com/api
```

---

# Autor

Proyecto desarrollado como Trabajo Integrador Full Stack.

Universidad Tecnológica Nacional (UTN)

2026