import { Router, Request, Response } from 'express';

export const contato = (req: Request, res: Response) => {
    res.render('pages/contato', {
        titulo: 'contato'
    });
};

export const sobre = (req: Request, res: Response) => {
    res.render('pages/sobre', {
        titulo: 'sobre'
    });
}