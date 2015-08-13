function RomanToDecimal() {

}

module.exports = RomanToDecimal;

RomanToDecimal.prototype.convert = function(a) {

var resultado = null;

if (typeof a === 'string' && a.match(/[^ICDMLXV]/gi)) {
    return null;
}
for (var key in a) {
    var letraAtual = a[key];
    var letraAnterior = (key === 0) ? null : a[key - 1];
    //console.log("letra", letraAtual, "letra Anterior", letraAnterior);

    switch (letraAtual) {
        case "I":
            resultado = resultado + 1;
            break;
        case "V":
            if (letraAnterior === "I") {
                resultado = resultado - 2;
            }
            resultado = resultado + 5;
            break;
        case "X":
            if (letraAnterior === "I") {
                resultado = resultado - 2;
            }
            resultado = resultado + 10;
            break;
        case "C":
            if (letraAnterior === "X") {
                resultado = resultado - 20;
            }
            resultado = resultado + 100;
            break;
        case "L":
            if (letraAnterior === "I") {
                resultado = resultado - 2;
            }
            resultado = resultado + 50;
            break;
        case "D":
            resultado = resultado + 500;
            break;
        case "M":
            if (letraAnterior === "C") {
                resultado = (resultado - 200);
            }
            resultado = resultado + 1000;
            break;
    }






    
}

return resultado;
};
