const Copo = require('../Copo.js');

describe('Testes da classe Copo (CupCalc)', () => {

    test('Copo 1: Deve calcular e classificar corretamente o Modelo Padrão (Água / Chá)', () => {
        // Dados de entrada: R = 4.0, r = 2.5, h = 9.0
        const copo = new Copo(9.0, 2.5, 4.0);

        expect(Number(copo.calcularGeratriz().toFixed(2))).toBe(9.12);
        expect(Number(copo.calcularABmenor().toFixed(2))).toBe(19.63);
        expect(Number(copo.calcularABmaior().toFixed(2))).toBe(50.27);
        expect(Number(copo.calcularAreaLateral().toFixed(2))).toBe(186.32);
        expect(Number(copo.calcularAreaTotal().toFixed(2))).toBe(256.22);
        expect(Number(copo.calcularVolume().toFixed(2))).toBe(303.95);
        expect(copo.classificar()).toBe('Copo Padrão (Água / Chá)');
    });

    test('Copo 2: Deve calcular e classificar corretamente o Modelo Grande (Suco / Refrigerante)', () => {
        // Dados de entrada: R = 5.0, r = 3.0, h = 12.0
        const copo = new Copo(12.0, 3.0, 5.0);

        expect(Number(copo.calcularGeratriz().toFixed(2))).toBe(12.17);
        expect(Number(copo.calcularABmenor().toFixed(2))).toBe(28.27);
        expect(Number(copo.calcularABmaior().toFixed(2))).toBe(78.54);
        expect(Number(copo.calcularAreaLateral().toFixed(2))).toBe(305.75);
        expect(Number(copo.calcularAreaTotal().toFixed(2))).toBe(412.57);
        expect(Number(copo.calcularVolume().toFixed(2))).toBe(615.75);
        expect(copo.classificar()).toBe('Copo Grande (Suco / Refrigerante)');
    });

    test('Deve classificar corretamente um Copo Dose (Cafezinho)', () => {
        // Exemplo extra: volume < 180 ml
        const copo = new Copo(5.0, 1.5, 2.5);
        expect(copo.classificar()).toBe('Copo Dose ( Cafezinho )');
    });

});