# Blog Template

Esta plantilla ha sido diseñada específicamente para su uso en GitHub Pages. Desarrollada con un enfoque en la simplicidad y eficiencia, utiliza **Pug**, **Gulp** y **Postcss** para ofrecer una experiencia de desarrollo ágil y moderna.

## Instrucciones de Uso

Para comenzar a utilizar esta plantilla, sigue los siguientes pasos:

1. **Clona el Repositorio**  
   Primero, clona el repositorio en tu máquina local:

2. **Instalación de Dependencias:**
   Una vez clonado, procede a instalar las dependencias necesarias con npm:

   ```bash
   npm install
   ```

3. **Configuración del .gitignore:**
   Es fundamental, tras clonar el proyecto, modificar el archivo .gitignore para asegurarte de que ciertos directorios y archivos no sean seguidos por Git. Añade las siguientes líneas al archivo .gitignore:

   ```bash
   .vscode/
   node_modules
   dev
   .browserslistrc
   gulpfile.babel.js
   package-lock.json
   package.json
   postcss.config.js
   .gitattributes
   ```

4. **Ejecución de la Plantilla:**
   La plantilla viene preconfigurada para funcionar perfectamente en un entorno local. Para visualizarla, te recomendamos utilizar un servidor de desarrollo como Live Server, y para ejecutar nuestro entorno de desarrollo solo debes ejecutar lo siguiente en consola:

   ```bash
   gulp
   ```

5. **Error**  
   Si obtenemos un error como este: in the working copy of 'archive.html', LF will be replaced by CRLF the next time Git touches it.
   Tenemos que agregar los siguientes comandos

   ```bash
   git add --renormalize .
   git commit -m "Renormalize all the line endings"
   ```

6. **Documentación**
   [Documentación Plantilla](https://gomezba.github.io/documentacion-plantilla/)

## Información del Autor

Esta plantilla fue desarrollada por **Joel Gómez**, un apasionado del desarrollo web con experiencia en la creación de sitios y aplicaciones modernas.
