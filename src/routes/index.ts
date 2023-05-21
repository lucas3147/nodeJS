import { Router, Request, Response } from 'express';
import { isDate } from 'util/types';

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
        tarefas: [
            'Estudar violino',
            'Estudar livros da faculdade',
            'Estudar nodeJS',
            'Estudar Apis'
        ]
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

router.get('/nome', (req: Request, res: Response) => {
    let nome: string = req.query.nome as string;

    res.render('pages/nome', {
        titulo: 'Conhecendo você!',
        nome
    });
});

router.get('/idade', (req: Request, res: Response) => {
    let idade = null;
    if (req.query.anoNascimento) {
        let anoNascimento: number = parseInt(req.query.anoNascimento as string);
        let anoAtual: number = new Date().getFullYear();
        idade = anoAtual - anoNascimento;
    }
    

    res.render('pages/idade', {
        titulo: 'Qual sua idade?',
        idade
    });
});

export default router;