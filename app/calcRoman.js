var RomanToDecimal = require("../app/romanToDecimal");

function CalcRoman() {
    this.roman = new RomanToDecimal();


}

module.exports = CalcRoman;


     
 
CalcRoman.prototype.somar = function(a,b) {
    if(typeof a==undefined || typeof b ==undefined){
       return null;
    }  
     console.log(a);
    var num1 = this.roman.convert(a);
    var num2 = this.roman.convert(b);

    return num1 + num2;
};
CalcRoman.prototype.subtrair = function(a,b) {
    var num1 = this.roman.convert(a);
    var num2 = this.roman.convert(b);

    return num1 - num2;
};

CalcRoman.prototype.multiplicar = function(a,b) {
    var num1 = this.roman.convert(a);
    var num2 = this.roman.convert(b);

    return num1 * num2;
};
CalcRoman.prototype.dividir = function(a,b) {
    var num1 = this.roman.convert(a);
    var num2 = this.roman.convert(b);

    return num1 / num2;
};




