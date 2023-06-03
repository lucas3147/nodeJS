import {Request, Response} from 'express'; 
import { Phrase } from '../Models/phrases';

export const ping = (req: Request, res: Response) => {
    res.json({pong: true});
}

export const random = (req: Request, res: Response) => {
    let nRand: number = Math.floor( Math.random() * 10 );
    res.json({number: nRand});
}

export const nome = (req: Request, res: Response) => {
    let nome: string = req.params.nome;

    res.json({nome: `Você enviou o nome ${nome}`});
}