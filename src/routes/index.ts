import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
    let age: number = 45;
    let showOld: boolean = age > 50;

    res.render('pages/home', {
        titulo: 'Página Principal',
        name: 'Lucas',
        lastName: 'Souza',
        age,
        showOld,
        products: [
            { title: 'ProdutoX', price: 30 },
            { title: 'ProdutoY', price: 15 },
            { title: 'ProdutoZ', price: 45 }
        ],
        tarefas: []
    });
});

router.get('/contato', (req: Request, res: Response) => {
    res.render('pages/contato', {
        titulo: 'contato'
    });
});

router.get('/sobre', (req: Request, res: Response) => {
    res.render('pages/sobre', {
        titulo: 'sobre'
    });
});

router.get('/abc', (req: Request, res: Response) => {
    res.send('Página abc sobre a empresa');
});

export default router;