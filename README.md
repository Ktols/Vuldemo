# Alicorp Labs VulDemo

Esta es una aplicación de prueba de concepto (PoC) desarrollada para **Alicorp Labs** por **Gerencia de Transición**. El propósito de esta aplicación es demostrar vulnerabilidades de seguridad comunes en un entorno controlado y mostrar cómo herramientas como **GitHub Advanced Security** pueden detectarlas y ayudar a mitigarlas.

## Visión General

La aplicación está construida con Next.js y React, e intencionalmente contiene varias fallas de seguridad, que incluyen:

*   **Inyección SQL (simulada):** En la página de inicio de sesión.
*   **Contraseñas Débiles:** En el formulario de registro.
*   **Secretos Hardcodeados:** Claves de API expuestas en el código fuente.
*   **Dependencias Vulnerables:** Uso de paquetes de `npm` con vulnerabilidades conocidas.
*   **Cross-Site Scripting (XSS):** Reflejado en una página de demostración.

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado lo siguiente:
- [Node.js](https://nodejs.org/) (versión 18 o superior)
- [npm](https://www.npmjs.com/) (generalmente viene con Node.js)

## Cómo Ejecutar en Local

1.  **Clonar el repositorio:**
    ```bash
    git clone <URL_DEL_REPOSITORIO>
    cd <NOMBRE_DEL_DIRECTORIO>
    ```

2.  **Instalar dependencias:**
    Ejecuta el siguiente comando para instalar todos los paquetes necesarios para el proyecto.
    ```bash
    npm install
    ```

3.  **Iniciar el servidor de desarrollo:**
    Una vez que la instalación esté completa, puedes iniciar la aplicación en modo de desarrollo.
    ```bash
    npm run dev
    ```

4.  **Abrir en el navegador:**
    La aplicación estará disponible en [http://localhost:9002](http://localhost:9002).

## Scripts Disponibles

En el archivo `package.json`, encontrarás los siguientes scripts:

- `npm run dev`: Inicia la aplicación en modo de desarrollo con Turbopack.
- `npm run build`: Compila la aplicación para producción.
- `npm run start`: Inicia un servidor de producción.
- `npm run lint`: Ejecuta el linter de Next.js para revisar el código.
