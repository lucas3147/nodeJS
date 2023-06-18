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
        expect(response2).toBe(false);
    });
});