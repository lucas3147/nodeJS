import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
    let age: number = 91;
    let showOld: boolean = age > 50;

    res.render('home', {
        name: 'Lucas',
        lastName: 'Souza',
        age,
        showOld,
        products: [
            { title: 'ProdutoX', price: 30 },
            { title: 'ProdutoY', price: 15 },
            { title: 'ProdutoZ', price: 45 }
        ],
        tarefas: [
            'estudar ao meio dia',
            'violino',
            'studeo Unicesumar'
        ]
    });
});

router.get('/contato', (req: Request, res: Response) => {
    res.send('Formulário de contato');
});

router.get('/sobre', (req: Request, res: Response) => {
    res.send('Página institucional sobre a empresa');
});

router.get('/abc', (req: Request, res: Response) => {
    res.send('Página abc sobre a empresa');
});

export default router;