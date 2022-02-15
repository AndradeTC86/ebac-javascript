const { mdc } = require('./mdc')

describe('Calculo do MDC', () => {

    it('Calculo do mdc', () => {
        expect(mdc(9,3)).toBe(3)
        expect(mdc(18,6)).toBe(6)
        expect(mdc(25,5)).toBe(5)
        expect(mdc(4,2)).toBe(2)
    });
    
});

