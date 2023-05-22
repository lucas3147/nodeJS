import { Router, Request, Response } from 'express';
import { Product } from '../models/Product';

export const home = (req: Request, res: Response) => {
    let age: number = 45;
    let showOld: boolean = age > 50;

    res.render('pages/home', {
        titulo: 'Página Principal',
        name: 'Lucas',
        lastName: 'Souza',
        age,
        showOld,
        products: Product.getAll(),
        expansives: Product.getFromPriceAfter(30),
        tarefas: [
            'Estudar violino',
            'Estudar livros da faculdade',
            'Estudar nodeJS',
            'Estudar Apis'
        ]
    });
};