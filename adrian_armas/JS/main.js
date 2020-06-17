var questions = new Array(["¿Sabrías protegerte adecuadamente ante la situación del covid19?", 1, 2],
                          ["¿Crees que hay suficientes EPIs?", 3, 4],
                          ["¿Deseas información?", 5, 0],
                          ["¿Crees que el uso de guantes 24 horas previene del contagio?", 8, 6],
                          ["¿Considereras que son importantes los EPIs en el trabajo?", 0, 0],
                          ["El uso correcto de la mascarilla es cubriendo toda la nariz y la boca, y colocando las gomas detras de la oreja", 0, 0],
                          ["De hecho el llevar los guantes 24 horas es igual que si no los lleváramos, tocar cualquier superficie contagiada con los guantes y tocarnos la cara y mucosas podríamos contagiarnos y expandirnos", 7 , 7],
                          ["Es recomendable ponernos guantes de usar y tirar en supermercados y comercios ya que te aseguras de que si tú traes el virus en tus manos no lo dejemos en la tienda",8 , 8],
                          ["¿Todas las mascarillas son efectivas?", 10, 9],
                          ["Las mascarillas fabricadas en casa no tienen efectividad comprobada", 10, 10],
                          ["¿Sabrías lavarte las manos correctamente?", 0, 11],
                          ["Lo ideal es hacer un lavado con agua y jabón intenso y enegético durante unos cuantos minutos (recuerda mantener el grifo cerrado mientras frotas) y por ambas caras, o usa un gel hidroalcohólico con una proporción d alcohol superior al 60%. No hace falta hacer ambas cosas: lavarse las manos con agua y jabón y usar gel hidroalcohólico, aunque si se quiere usar las dos no estaría mal del todo", 0 , 0]); 

var index = 0;

function loadQuestionary(index){
    printQuestion (index);
    printButtons (index);
}

function printQuestion (index){
    console.log("Current question: " + questions[index][0]);
    document.getElementById('question').innerHTML = questions[index][0];
}

function printButtons (index){
    let yesQuestion = questions[index][1];
    let noQuestion = questions[index][2];
    
    console.log("index: " + index);
    console.log("yesQuestion: " + yesQuestion);
    console.log("noQuestion: " + noQuestion);
    
    index = index + 3;
    
    let yesEvent = 'onclick="loadQuestionary(' + yesQuestion + ')"';
    let noEvent = 'onclick="loadQuestionary(' + noQuestion + ')"';
    
    document.getElementById('buttons').innerHTML = '<button class="yes" ' + yesEvent + '> SI </buttons>';
    document.getElementById('buttons').innerHTML += '<button class="no" ' + noEvent + '> NO </buttons>';
}
