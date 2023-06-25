import request from 'supertest';
import app from '../app';
import {User} from '../models/User';

describe('Testing api routes', () => {

    let email = 'test@jest.com';
    let password = '1234';

    beforeAll(async () => {
        await User.sync({ force: true });
    });

    it('should ping pong', (done) => {
        request(app)
                .get('/ping')
                .then(response => {
                    expect(response.body.pong).toBeTruthy();
                    return done();
                });
        //Request irá inicializar o servidor
        //get é o método da requisição que estamos fazendo
        //then nos retorna a resposta
    });

    // Como estamos trabalhando co uma requisição, não vamos colocar o async e o await aqui,
    //vamos ter uma função chamada done() que indica ao jest que o teste foi finalizado.

    it('should register a new user', (done) => {
        request(app)
                .post('/register')
                .send(`email=${email}&password=${password}`)
                .then(response => {
                    expect(response.body.error).toBeUndefined();
                    expect(response.body).toHaveProperty('id');
                    return done();
                });
    });

    it('should not allow to register with existing email', (done) => {
        request(app)
                .post('/register')
                .send(`email=${email}&password=${password}`)
                .then(response => {
                    expect(response.body.error).not.toBeUndefined();
                    return done();
                });
    });

    it('should not allow to register without password', (done) => {
        request(app)
                .post('/register')
                .send(`email=${email}`)
                .then(response => {
                    expect(response.body.error).not.toBeUndefined();
                    return done();
                });
    });

    it('should not allow to register without email', (done) => {
        request(app)
                .post('/register')
                .send(`password=${password}`)
                .then(response => {
                    expect(response.body.error).not.toBeUndefined();
                    return done();
                });
    });

    it('should not allow to register without data', (done) => {
        request(app)
                .post('/register')
                .send(``)
                .then(response => {
                    expect(response.body.error).not.toBeUndefined();
                    return done();
                });
    });

    it('should login correctly', (done) => {
        request(app)
                .post('/login')
                .send(`email=${email}&password=${password}`)
                .then(response => {
                    expect(response.body.error).toBeUndefined();
                    expect(response.body.status).toBeTruthy();
                    return done();
                });
    });

    it('should not login with incorrect data', (done) => {
        request(app)
                .post('/login')
                .send(`email=${email}&password=invalid`)
                .then(response => {
                    expect(response.body.error).toBeUndefined();
                    expect(response.body.status).toBeFalsy();
                    return done();
                });
    });

    it('should list users', (done) => {
        request(app)
                .get('/list')
                .then(response => {
                    expect(response.body.error).toBeUndefined();
                    expect(response.body.list.length).toBeGreaterThanOrEqual(1);
                    expect(response.body.list).toContain(email);
                    return done();
                });
    });
})