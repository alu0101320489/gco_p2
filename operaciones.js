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


function main() {
    ficheros[0]=ficheros[0].replaceAll('.', '');
    ficheros[0]=ficheros[0].replaceAll(',', '');
    ficheros[0]=ficheros[0].toLowerCase();
    const docs = ficheros[0].split("\n")
    const stopwords = ficheros[1].split("\n")
    //console.log(docs)
    var terminos = docs[0].split(" ")

    
    terminos.forEach(element => console.log(stopwords.indexOf(element.toString()))
        //terminos.splice(terminos.indexOf(element),1)
    )

    console.log(terminos)
}