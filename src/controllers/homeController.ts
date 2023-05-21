import { Router, Request, Response } from 'express';

export const home = (req: Request, res: Response) => {
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
};