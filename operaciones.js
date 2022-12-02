var ficheros= [];
var terminos=[];

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


function TF(termino, terminos) {
  var count = 0;
  for (let i = 0; i < terminos.length; i++) {
    if (terminos[i] == termino) {
      count++;
    }
  }
  return (1 + Math.log10(count));
}

function IDF(termino, terminos, N) {
  var count = 0;
  for (let i = 0; i < terminos.length; i++) {
    if (TF(termino, terminos[i]) > 0) {
      count++;
    }
  }
  return Math.log10(N/count);
}

function similitud_coseno(terminos1, terminos2) {
  var similitud = 0;
  var vector1_length = 0;
  var vector2_length = 0;
  for (let i = 0; i < terminos1.length; i++) {
    vector1_length = vector1_length + Math.pow(TF(terminos1[i],terminos1),2);
  }
  vector1_length = Math.sqrt(vector1_length);

  for (let i = 0; i < terminos2.length; i++) {
    vector2_length = vector2_length + Math.pow(TF(terminos2[i],terminos2),2);
  }
  vector2_length = Math.sqrt(vector2_length);

  if (terminos1.length < terminos2.length) {
    for(let i=0; i<terminos1.length; i++){
      similitud = similitud + (TF(terminos1[i],terminos1)/vector1_length)*(TF(terminos2[i],terminos2)/vector2_length);
    }
  } else {
    for(let i=0; i<terminos2.length; i++){
      similitud = similitud + (TF(terminos1[i],terminos1)/vector1_length)*(TF(terminos2[i],terminos2)/vector2_length);
    }
  }
  return similitud;
}

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

    for(let i=0;i<docs.length;i++){

      terminos[i] = docs[i].split(" ")

      //Elimina las stopwords
      for (let j = 0; j < terminos[i].length; j++) {
        if (stopwords.includes(terminos[i][j])) {
          terminos[i].splice(j,1)
        }
      }
      //Sustituye los terminos para la lematización
      for (let j = 0; j < terminos[i].length; j++) {
        if (ficheros[2][terminos[i][j]] != undefined) {
          terminos[i][j] = ficheros[2][terminos[i][j]];
        }
      }
      
      //Introducir los valores en la tabla
      var table = document.getElementById("tabla");
      var row = table.insertRow(document.getElementById("tabla").rows.length);
      var cell1 = row.insertCell(0);
      cell1.innerHTML = "Documento "+(i+1);
      for (let j = 0; j < terminos[i].length; j++) {
        var row = table.insertRow(document.getElementById("tabla").rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        cell1.innerHTML = j;
        cell2.innerHTML = terminos[i][j];
        cell3.innerHTML = TF(terminos[i][j], terminos[i]);
        cell4.innerHTML = IDF(terminos[i][j], terminos, docs.length);
        cell5.innerHTML = TF(terminos[i][j], terminos[i])*IDF(terminos[i][j], terminos, docs.length);
      }
      var text = document.getElementById("similitudes");
      text.textContent += "Similitudes del documento "+ (i+1) + "\n";
      for (let j = 0; j < docs.length; j++) {
        if (i!=j) {
          text.textContent += (j+1) + ": " + (similitud_coseno(docs[i], docs[j])).toFixed(4) + "\n";
        }
      }
    }
}