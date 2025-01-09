# Proyecto de Gestión de Tareas

Este proyecto es una API RESTful para la gestión de tareas, donde los usuarios pueden crear, actualizar, eliminar y consultar tareas asociadas a su cuenta. Utiliza **Express.js** para el servidor, **MongoDB** como base de datos, y **bcrypt** para la encriptación de contraseñas.

## Tecnologías Usadas

- **Node.js**: Entorno de ejecución para JavaScript del lado del servidor.
- **Express.js**: Framework minimalista para la construcción de aplicaciones web en Node.js.
- **MongoDB**: Base de datos NoSQL utilizada para almacenar las tareas y los usuarios.
- **Mongoose**: Biblioteca de modelado de objetos MongoDB para Node.js.
- **bcryptjs**: Biblioteca para encriptar y verificar contraseñas.
- **express-validator**: Middleware para realizar validaciones en las rutas.
- **dotenv**: Gestión de variables de entorno.
- **CORS**: Habilita el uso de solicitudes de diferentes orígenes (Cross-Origin Resource Sharing).
- **Swagger**: Documentación interactiva de la API.
  
## Funcionalidades

### 1. **Gestión de Usuarios**
- La creación de un usuarios no esta permitida, solo sera cargado con nombre, correo electrónico y contraseña (encriptada con bcrypt) por medio de un archivo seed.js.
- El usuario debe estar autenticado para realizar ciertas acciones (como crear tareas).

### 2. **Gestión de Tareas**
- Crear, actualizar, eliminar y consultar tareas.
- Las tareas se asocian a los usuarios a través de su ID.
- Cada tarea tiene un título, descripción, fecha de creación y estado (completa/incompleta).

### 3. **Validaciones**
- Las entradas de los usuarios se validan usando `express-validator`, como la validez del correo electrónico y la existencia del título de la tarea.

### 4. **Autenticación**
- Los usuarios deben estar autenticados para interactuar con las rutas de tareas.
- Se usa la encriptación de contraseñas con **bcryptjs**.

### 5. **Documentación con Swagger**
- La API está documentada usando Swagger, lo que facilita la interacción y prueba de los endpoints a través de una interfaz gráfica.
- Accede a la documentación en: `http://localhost:5000/api-docs`

## Instalación

1. **Clona el repositorio**:
   ```bash
   git clone https://github.com/csantander93/Task-Manager-Back.git
Instala las dependencias:

bash
Copiar código
npm install
Configura las variables de entorno: Crea un archivo .env en la raíz del proyecto y añade las siguientes variables:

makefile
Copiar código
MONGO_URI=mongodb://localhost:27017/tareasDB
PORT=5000
NODE_ENV=development
Asegúrate de que tu base de datos MongoDB esté corriendo localmente o usa una base de datos remota de tu preferencia.

Inicia el servidor:

bash
Copiar código
npm start
Pre-carga de Datos: Si deseas cargar datos de ejemplo, el script seedDatabase() creará un usuario y algunas tareas iniciales para pruebas. Esto se ejecutará automáticamente cuando inicies el servidor en el entorno de desarrollo.

Usuario de Prueba
Importante: Las pruebas se deben realizar utilizando el siguiente usuario pre-cargado:

Correo electrónico: admin@admin.com
Contraseña: 123456
Este usuario es el único configurado en el script de pre-carga de datos (seed.js). Usa este usuario para autenticarte y realizar pruebas en la API.

Endpoints Disponibles
Usuarios
POST /api/users/login: Iniciar sesión con el correo electrónico y contraseña.
GET /api/users/profile: Obtener el perfil del usuario autenticado.
Tareas
GET /api/tasks: Obtener todas las tareas del usuario autenticado.
POST /api/tasks: Crear una nueva tarea.
PUT /api/tasks/:id: Actualizar una tarea existente.
DELETE /api/tasks/:id: Eliminar una tarea existente.
Documentación Swagger
La API está documentada de manera interactiva utilizando Swagger. Para acceder a la documentación, abre tu navegador y ve a la siguiente URL:

URL: http://localhost:5000/api-docs
Pruebas
Para probar la API, puedes usar herramientas como Postman o Insomnia.

Autenticación
Para autenticarte, usa el siguiente usuario pre-cargado:

Correo electrónico: admin@admin.com
Contraseña: 123456
Realiza una solicitud POST a /api/users/login con el siguiente cuerpo en formato JSON:

json
Copiar código
{
  "email": "admin@admin.com",
  "password": "123456"
}
Este endpoint devolverá un token JWT que debes incluir en las cabeceras de las siguientes solicitudes:

bash
Copiar código
Authorization: Bearer <token>
Notas de Seguridad
Contraseña del usuario: La contraseña de prueba es 123456 y está encriptada utilizando bcrypt. No uses esta contraseña en producción.
Autenticación: La autenticación de usuarios está basada en JWT (JSON Web Token). Asegúrate de enviar el token en las cabeceras de autorización para acceder a los endpoints protegidos.
Contribuciones
Si deseas contribuir a este proyecto, por favor sigue estos pasos:

Realiza un fork del repositorio.
Crea una nueva rama (git checkout -b feature/nueva-funcionalidad).
Realiza tus cambios y haz commit.
Haz push a tu rama (git push origin feature/nueva-funcionalidad).
Abre un pull request detallando los cambios realizados.
Licencia
Este proyecto está bajo la Licencia MIT - consulta el archivo LICENSE para más detalles.

Nota: Este proyecto está diseñado principalmente para fines educativos y de prueba. No debe usarse en un entorno de producción sin realizar cambios adecuados en cuanto a seguridad y manejo de datos sensibles.

markdown
Copiar código

### Explicación del README:

- **Tecnologías Usadas**: Menciona todas las herramientas utilizadas en el proyecto, como Node.js, Express, MongoDB, y otras bibliotecas importantes.
- **Funcionalidades**: Describe las principales características de la API, como la gestión de usuarios, tareas, validaciones y autenticación.
- **Instalación**: Proporciona instrucciones detalladas sobre cómo instalar y configurar el proyecto en el entorno local.
- **Usuario de Prueba**: Se resalta que las pruebas deben realizarse con el usuario pre-cargado `admin@admin.com` con la contraseña `123456`.
- **Endpoints Disponibles**: Enumera los endpoints de la API para que los desarrolladores sepan qué acciones pueden realizar con la API.
- **Pruebas**: Instrucciones sobre cómo autenticar al usuario y realizar pruebas utilizando herramientas como Postman o Insomnia.
- **Licencia y Contribuciones**: Se proporciona información sobre cómo contribuir al proyecto y detalles sobre la licencia.

Este README proporciona toda la información necesaria para que un desarrollador o usuario pueda comenzar a trabajar con tu API, realizar pruebas y entender cómo se estructuran las pruebas con el usuario de prueba.
