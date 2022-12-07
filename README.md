# Sistemas de recomendación. Basado en el contenido
## Alberto Rios de la Rosa - alu0101235929@ull.edu.es
## Daniel Hernández Fajardo - alu0101320489@ull.edu.es
## Alejandro Pérez Álvarez - alu0101215310@ull.edu.es

### Descripción del código desarrollado

La practica ha sido desarrollada en un fichero HTML y otro en Javascript. 

El fichero HTML básicamente es un formulario donde se introducen los parámetros de entradas y se muestran los de salida.
Lo parámetros de entradas son los siguientes:

  * Fichero de texto plano con extensión .txt. Cada documento viene representado en una línea del fichero
  * Fichero con palabras de parada, stop words, a descartar durante el proceso de recomendación
  * Fichero de lematización de términos.
  
Por otro lado, en el fichero Javascript, encontraremos las funciones que llevarán a cabo los calculos necesarios para mostrar la salida requerrida.
Estas son las siguientes:

  * `TF(termino, terminos)`: Función que calcula la frecuencia de los términos.
  * `IDF(termino, terminos, N)`: Funcióndestinada a reducir el peso de los términos que aparecen en los documentos.
  * `similitud_coseno(terminos1, terminos2)`: Función que calcula las similitud entre dos usuarios a través de la distancia coseno
  * `main()`: Función principal, en el que primero se formatean los distintos documentos pasados en el primer fichero y también formateamos las stop words. Luego se eliminan las stop words del documento y se sustituyen los terminos para la lematización. Por último creamos la tabla y llamamos a la función que calcula la similitud con el coseno. 
  
 ### Ejemplo de uso

 A continuación se mostrará un ejemplo de como habría que usar la aplicación y cual sería su resultado.
 
  #### Parametros introducidos:
  
   * Fichero con los documentos: document1.txt
   * Fichero de los stopwords: stopwords.txt
   * Fichero de lematizacion: corpus.txt
   
  #### Parametros de salida: 
  
  * Tabla del document 1

   Indice	Término	TF	IDF	TF-IDF
   0	aromas	1	1	1
   1	include	1	1	1
   2	tropical	1	1	1
   3	fruit	1	1	1
   4	broom	1	1	1
   5	brimstone	1	1	1
   6	dried	1.3010299956639813	1	1.3010299956639813
   7	herb	1	1	1
   8	palate	1	1	1
   9	overly	1	1	1
   10	expressive	1	1	1
   11	offer	1	1	1
   12	unripened	1	1	1
   13	apple	1	1	1
   14	citrus	1	1	1
   15	dried	1.3010299956639813	1	1.3010299956639813
   16	sage	1	1	1
   17	brisk	1	1	1
   18	acidity	1	1	1

  * Similitud del coseno:

    2: 0.8600
    3: 0.9331
    4: 0.9047
    5: 0.8113
    6: 0.7995
    7: 0.9455
    8: 0.8228
    9: 0.9320
    10: 0.9525

  
