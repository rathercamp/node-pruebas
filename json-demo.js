let infoCurso = {
    "Titulo": "Aprende Node.js",
    "numVisitas": 54543,
    "numLikes": 3231,
    "temas": [
      "Javascript",
      "Node.js"
    ],
    "esPublico": true  
  };

//Objeto -> Cadena de caractéres
//Cadena de caracteres en formato json
let infoCursoJSON = JSON.stringify(infoCurso);

console.log(infoCursoJSON);
console.log(typeof infoCursoJSON);

//Cadena de caracteres -> Objeto
let infoCursoObjeto = JSON.parse(infoCursoJSON);

console.log(infoCursoObjeto);
console.log(typeof infoCursoObjeto);

console.log(infoCursoObjeto.Titulo);