var assert = require("assert");
var CalcRoman = require("../app/calcRoman");



describe('calRoman', function() {

    var calc;
    beforeEach(function() {
        calc = new CalcRoman();
    });


    it('Quando for 1+2  deve retornar 3', function() {
        var resultado = calc.somar("I", "II");

        assert.equal(resultado, 3);
    });

    it('Quando for 3-1  deve retornar 2', function() {
        var resultado = calc.subtrair("II", "I");

        assert.equal(resultado, 1);
    });

    it('Quando for 9*1  deve retornar 9', function() {
        var resultado = calc.multiplicar("IX", "I");

        assert.equal(resultado, 9);
    });
    it('Quando for A*A  deve retornar null', function() {
        var resultado = calc.somar("AX", "ED");

        assert.equal(resultado, 0);
    });
    it('Quando for VI/III  deve retornar null', function() {
        var resultado = calc.dividir("VI", "III");

        assert.equal(resultado, 2);
    });

    it('Quando for 1*5  deve retornar 0', function() {
        var resultado = calc.somar(1, 5);

        assert.equal(resultado, 0);
    });

    it('Quando for unidefined deve retornar 0', function() {
        var resultado = calc.somar(undefined,undefined);

        assert.equal(resultado,0);
    });




});
