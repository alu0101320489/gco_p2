var ficheros= [];

document.getElementById("documentos")
            .addEventListener("change", function () {
              var fr = new FileReader();
              fr.readAsText(this.files[0]);
              fr.onload = function () {
                ficheros[0] = fr.result;
              };  
          });

document.getElementById("stopwords")
            .addEventListener("change", function () {
              var fr = new FileReader();
              fr.readAsText(this.files[0]);
              fr.onload = function () {
                ficheros[1] = fr.result;
              };  
          });

document.getElementById("corpus")
            .addEventListener("change", function () {
              var fr = new FileReader();
              fr.readAsText(this.files[0]);
              fr.onload = function () {
                ficheros[2] = fr.result;
              };  
          });


function main() {
    //Formatea los documentos
    ficheros[0]=ficheros[0].replaceAll('.', '');
    ficheros[0]=ficheros[0].replaceAll(',', '');
    ficheros[0]=ficheros[0].toLowerCase();
    ficheros[0]=ficheros[0].replaceAll('\n', '');
    const docs = ficheros[0].split("\r")
    //Formatea las stopwords
    ficheros[1]=ficheros[1].replaceAll('\n', '');
    const stopwords = ficheros[1].split("\r")
    
    ficheros[2]=JSON.parse(ficheros[2])

    var terminos = docs[0].split(" ")

    //Elimina las stopwords
    for (let i = 0; i < terminos.length; i++) {
      if (stopwords.includes(terminos[i])) {
        terminos.splice(i,1)
      }
    }
    console.log(terminos)
    //Sustituye los terminos para la lematización
    for (let i = 0; i < terminos.length; i++) {
      if (ficheros[2][terminos[i]] != undefined) {
        terminos[i] = ficheros[2][terminos[i]];
      }
    }
    console.log(terminos)
}