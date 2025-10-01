# Visor de Perfiles de Consumidores

Este es un proyecto de visualización de datos interactivo diseñado para mostrar y analizar perfiles de consumidores. La aplicación presenta los datos a través de un panel centralizado con gráficos agregados y un carrusel detallado para explorar perfiles individuales.

##  Características

- **Panel Interactivo**: Muestra gráficos agregados para la distribución de género y un histograma de rangos de edad de todos los perfiles.
- **Carrusel de Perfiles**: Permite a los usuarios navegar a través de tarjetas de perfil individuales.
- **Tarjeta de Perfil Detallada**: Cada tarjeta muestra:
    - Una imagen de la persona.
    - Información demográfica clave (género, rango de edad).
    - Un perfil de consumidor analizado, incluyendo clase y rasgos principales.
    - Un **gráfico de radar** que visualiza atributos del consumidor como `Comodidad`, `Moda`, `Practicidad`, `Calidad` y `Precio`.
- **Filtros Dinámicos**: Un menú desplegable permite filtrar los gráficos del panel para mostrar las estadísticas de una sola persona seleccionada.
- **UI Atractiva**: Fondos animados con `particles.js` para una experiencia de usuario más dinámica.

##  Tecnologías Utilizadas

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Librerías de Visualización**:
    - [Chart.js](https://www.chartjs.org/): Para los gráficos de barras, dona y radar.
    - [particles.js](https://vincentgarreau.com/particles.js/): Para los fondos de partículas animados.
- **Fuentes**: [Google Fonts](https://fonts.google.com/) (Chakra Petch).

##  Estructura de Archivos

```
.
├── cropped_persons/      # Contiene las imágenes de los perfiles.
│   ├── person_1.jpg
│   └── ...
├── descriptions.json     # Archivo JSON con los datos de los perfiles (actualmente embebido en script.js).
├── index.html            # Estructura principal de la página web.
├── script.js             # Lógica de la aplicación, manipulación del DOM y creación de gráficos.
├── style.css             # Estilos para la presentación visual.
└── README.md             # Este archivo.
```

##  Cómo Empezar

1.  Clona o descarga este repositorio.
2.  Asegúrate de tener una conexión a internet, ya que las librerías `Chart.js` y `particles.js` se cargan desde una CDN.
3.  Abre el archivo `index.html` en tu navegador web preferido.

¡Y eso es todo! El panel se cargará y podrás comenzar a explorar los datos.
