import { Router, Request, Response } from 'express';

export const nome = (req: Request, res: Response) => {
    let nome: string = req.query.nome as string;

    res.render('pages/nome', {
        titulo: 'Conhecendo você!',
        nome
    });
};

export const idade = (req: Request, res: Response) => {
    res.render('pages/idade', {
        titulo: 'Qual sua idade?'
    });
};

export const idade_resultado = (req: Request, res: Response) => {
    let idade = null;
    if (req.body.anoNascimento) {
        let anoNascimento: number = parseInt(req.body.anoNascimento as string);
        let anoAtual: number = new Date().getFullYear();
        idade = anoAtual - anoNascimento;
    }

    res.render('pages/idade', {
        titulo: 'Qual sua idade?',
        idade
    });
};