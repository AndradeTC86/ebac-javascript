const { inteiros } = require('./inteiros')

describe('Calculo da soma dos numeros inteiros abaixo de 1000', () => {

    it('Calculo da soma dos numeros inteiros abaixo de 1000', () => {
        expect(inteiros(5,7)).toBe(156361)
        expect(inteiros(6,8)).toBe(124502)
        expect(inteiros(4,9)).toBe(166836)
    });
    
});