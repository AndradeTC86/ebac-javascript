const { indMenor, indMaior } = require('./array')

describe('Validar array de números', () => {

    it('Buscar o indice do menor número do Array', () => {
        expect(indMenor([4,2,5,1])).toBe(3)
    });

    it('Buscar o indice do maior número do Array', () => {
        expect(indMaior([4,2,5,1])).toBe(2)
    });
    
});