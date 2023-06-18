import { Math } from './Math';

// Grupo de testes
describe('Testing Math library', () => {
    // One Test
    it('should sum two numbers correctly', () => {
        const response = Math.sum(5, 10);
        expect(response).toBe(15);
    });

    // Two Test...
    it('should decrease two numbers correctly', () => {
        const response = Math.sub(4, 2);
        expect(response).toBe(2);
    });

    //...
    it('should multiply two numbers correctly', () => {
        const response = Math.mul(3, 5);
        expect(response).toBe(15);
    });

    it('should divide two numbers correctly', () => {
        const response = Math.div(15, 5);
        expect(response).toBe(3);

        const response2 = Math.div(3, 0);
        expect(response2).toBeFalsy();
    });

    it.only('Contar quantos caracteres tem na string', () => {
        const response = 'DENIED';
        expect(response).toHaveLength(6);
    });

    it.only('Se possui a propriedade e-mail', () => {
        const response = {
            name: 'Lucas',
            email: 'suporte@b7web.com.br'
        }
        expect(response).toHaveProperty('email');
    });

    it.only('Se possui é undefined', () => {
        const response = undefined;
        expect(response).toBeUndefined();
    });

    it.only('Se possuium numero maior que...', () => {
        const response = 2;
        expect(response).toBeGreaterThan(15);
    });

    it.only('Se possuium numero menor que...', () => {
        const response = 2;
        expect(response).toBeLessThan(15);
    });

    it.only('Se retornou uma string que é um email', () => {
        const response = 'lucas@gmail.com';
        expect(response).toMatch('[Expressão Regular');
    });

    it.only('Se retornou um Erro', () => {
        const response = Math.div(10, 0);
        expect(response).toThrow(new Error('Não divide por zero'));
    });
});