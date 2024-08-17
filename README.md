# Instrucciones para Descargar y Ejecutar el Aplicativo Web

Este repositorio contiene dos carpetas principales: `api` y `app`. A continuación se detallan los pasos para configurar y ejecutar ambas partes del proyecto.

> [!WARNING]
> Este proyecto utiliza la **última versión de Node.js (20.16.0)** y la **última versión de npm (10.2.1)**. Asegúrate de tener estas versiones instaladas en tu sistema para evitar problemas de compatibilidad.

## Configuración y Ejecución del Servidor API

1. **Clonar el Repositorio:**

   Clona el repositorio desde GitHub y navega a la carpeta `api`:

   ```bash
   git clone https://github.com/pipecosme123/Icomallas.git
   cd Icomallas/api
   ```

2. **Instalar Dependencias:**

   Una vez dentro de la carpeta `api`, instala las dependencias necesarias ejecutando el siguiente comando:

   ```bash
   npm install
   ```

3. **Configurar Variables de Entorno:**

   El proyecto requiere ciertas variables de entorno para funcionar correctamente. Crea un archivo `.env` en la raíz del proyecto (carpeta `api`) y define las variables de entorno necesarias. Consulta el archivo `env_required.txt` para conocer cuáles son las variables requeridas.

   Asegúrate de incluir las credenciales de acceso al motor de base de datos **PostgreSQL** en este archivo, así como el nombre de la base de datos que debes crear en PostgreSQL antes de ejecutar el servidor.

4. **Crear la Base de Datos:**

   Antes de ejecutar la API, asegúrate de crear la base de datos en PostgreSQL utilizando las credenciales configuradas en el archivo `.env`.

5. **Ejecutar el Servidor:**

   Una vez configurado el archivo `.env` y creada la base de datos, puedes levantar el servidor ejecutando el siguiente comando:

   ```bash
   npm run dev
   ```

> [!NOTE]
> - Las tablas de la base de datos requeridas para el funcionamiento de la api, se crean automáticamente al iniciar el servidor.

## Configuración y Ejecución del Proyecto Frontend (App)

1. **Navegar a la Carpeta App:**

   Después de clonar el repositorio, navega a la carpeta `app`:

   ```bash
   cd ../app
   ```

2. **Instalar Dependencias:**

   Instala las dependencias del proyecto ejecutando:

   ```bash
   npm install
   ```

3. **Configurar Variables de Entorno:**

   Crea un archivo `.env` en la carpeta `app` y define las variables de entorno necesarias para la aplicación frontend. Consulta el archivo `env_required.txt` para conocer cuáles son las variables requeridas.

4. **Ejecutar la Aplicación:**

   Una vez configurado el archivo `.env`, ejecuta el siguiente comando para iniciar la aplicación frontend:

   ```bash
   npm run dev
   ```

   La aplicación debería estar corriendo en el puerto especificado por Vite, generalmente en `http://localhost:5173`.

## Consideraciones Finales
> [!TIP]
> - Asegúrate de que el servidor API esté corriendo antes de iniciar la aplicación frontend.
> - **Problema de CORS:** Si experimentas un problema de CORS, necesitarás modificar el archivo `index.js` de la carpeta `api`. Busca la variable `corsOptions` y modifica el atributo `origin`, añadiendo la URL que obtienes al ejecutar la aplicación de Vite (por defecto `http://localhost:5173`):
>  ```javascript
>  const corsOptions = {
>    origin: 'http://localhost:5173', // URL del proyecto de Vite
>    optionsSuccessStatus: 200,
>  };
>  ```
> Esto permitirá que la API acepte solicitudes del frontend sin problemas de CORS.
