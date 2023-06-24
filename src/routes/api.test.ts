import request from 'supertest';
import app from '../app';

describe('Testing api routes', () => {

    it('should ping pong', (done) => {
        request(app)
                .get('/ping')
                .then(response => {
                    expect(response.body.pong).toBeTruthy();
                    return done();
                })
        //Request irá inicializar o servidor
        //get é o método da requisição que estamos fazendo
        //then nos retorna a resposta
    });

    // Como estamos trabalhando co uma requisição, não vamos colocar o async e o await aqui,
    //vamos ter uma função chamada done() que indica ao jest que o teste foi finalizado.

    
})