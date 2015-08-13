var assert = require("assert");
var RomanToDecimal = require("../app/romanToDecimal");

describe('RomanToDecimal Teste', function() {

    var roman;

    beforeEach(function() {
        roman = new RomanToDecimal();
    });

    it('Quando for I deve retornar 1', function() {
        var resultado = roman.convert("I");

        assert.equal(resultado, 1);
    });

    it('Quando for CCXXIII deve retornar 223', function() {
        var resultado = roman.convert("CCXXIII");

        assert.equal(resultado, 223);
    });


    it('Quando for IV deve retornar 4', function() {
        var resultado = roman.convert("IV");

        assert.equal(resultado, 4);
    });

    it('Quando for V deve retornar 5', function() {
        var resultado = roman.convert("V");

        assert.equal(resultado, 5);
    });

    it('Quando for XC deve retornar 90', function() {
        var resultado = roman.convert("XC");

        assert.equal(resultado, 90);
    });

    it('Quando for IX deve retornar 9', function() {
        var resultado = roman.convert("IX");

        assert.equal(resultado, 9);
    });

    it('Quando for LI deve retornar 50', function() {
        var resultado = roman.convert("LI");

        assert.equal(resultado, 51);
    });

    it('Quando for CCXIV deve retornar 214', function() {
        var resultado = roman.convert("CCXIV");

        assert.equal(resultado, 214);
    });
    it('Quando for IL deve retornar 49', function() {
        var resultado = roman.convert("IL");

        assert.equal(resultado, 49);
    });

    it('Quando for CMXCIX deve retornar 999', function() {
        var resultado = roman.convert("CMXCIX");

        assert.equal(resultado, 999);
    });
    it('Quando for CL deve retornar 999', function() {
        var resultado = roman.convert("CL");

        assert.equal(resultado, 150);
    });
    it('Quando for DC deve retornar 600', function() {
        var resultado = roman.convert("DC");

        assert.equal(resultado, 600);
    });
    it('Quando for III deve retornar 3', function() {
        var resultado = roman.convert("III");

        assert.equal(resultado, 3);
    });
    it('Quando for DLIX deve retornar 559', function() {
        var resultado = roman.convert("DLIX");

        assert.equal(resultado, 559);
    });
    it('Quando for MCXXVIII deve retornar 1128', function() {
        var resultado = roman.convert("MCXXVIII");

        assert.equal(resultado, 1128);
    });
    it('Quando for MMMCMXCIX deve retornar 3999', function() {
        var resultado = roman.convert("MMMCMXCIX");

        assert.equal(resultado, 3999);
    });
    it('Quando for JJJJ deve retornar null', function() {
        var resultado = roman.convert("JJJJ");

        assert.equal(resultado, null);
    });

    it('Quando for AK deve retornar null', function() {
        var resultado = roman.convert("AK");

        assert.equal(resultado, null);
    });
    it('Quando for "undefined" deve retornar null', function() {
        var resultado = roman.convert(undefined, undefined);

        assert.equal(resultado, null);
    });
    it('Quando for nulo deve retornar null', function() {
        var resultado = roman.convert(null);

        assert.equal(resultado, null);
    });

    it('Quando for array deve retornar null', function() {
        var resultado = roman.convert([], []);

        assert.equal(resultado, null);
    });

    it('Quando for ABC deve retornar null', function() {
        var resultado = roman.convert("ABC");

        assert.equal(resultado, null);
    });
    it('Quando for nulo deve retornar null', function() {
        var resultado = roman.convert(null);

        assert.equal(resultado, null);
    });

});
