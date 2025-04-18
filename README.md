# 🛡️ API de Autenticación con Node.js, Express y MySQL

API REST completa para registro, login y acceso a rutas protegidas con autenticación JWT.

---

## 🚀 Características

- Registro de usuarios con validaciones
- Login con generación de JWT
- Contraseñas encriptadas con bcrypt
- Rutas protegidas con middleware personalizado
- Validaciones con `express-validator`
- Conexión a MySQL con `mysql2`
- Documentación Swagger (`/api-docs`)
- Estructura modular y lista para escalar

---

## 📦 Instalación

1. Clona este repositorio:
```bash
git clone https://github.com/tuusuario/api-node-auth.git
cd api-node-auth
```

2. Instala dependencias:
```bash
npm install
```

3. Crea un archivo `.env` basado en el ejemplo:

```bash
cp .env.example .env
```

4. Ajusta tus variables en `.env`:

```env
PORT=3000
JWT_SECRET=supersecreta123
DB_HOST=localhost
DB_USER=root
DB_PASS=
DB_NAME=apidb
```

5. Levanta el servidor:

```bash
node server.js
```

---

## 🧪 Endpoints principales

### `POST /api/register`
Registra un nuevo usuario  
Body:
```json
{
  "email": "test@correo.com",
  "password": "123456"
}
```

### `POST /api/login`
Autenticación y retorno de token  
Body:
```json
{
  "email": "test@correo.com",
  "password": "123456"
}
```

### `GET /api/profile`
Retorna datos del usuario autenticado  
Header:
```http
Authorization: Bearer eyJhbGci...
```

---

## 📑 Documentación interactiva

Accede a Swagger UI:
```
http://localhost:3000/api-docs
```

Desde ahí puedes probar todos los endpoints.

---

## 🐬 Base de datos

```sql
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(191) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## 📁 Estructura

```
.
├── controllers/
├── routes/
├── middlewares/
├── config/
├── server.js
├── .env.example
└── README.md
```

---

## ✅ Próximos pasos sugeridos

- Dockerización del entorno
- Conexión con frontend en React
- Roles y permisos
- Tests automatizados con Jest

---

## 📄 Licencia

MIT