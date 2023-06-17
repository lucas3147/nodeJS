import { Request, Response } from 'express';
import { User } from '../models/User';

export const ping = (req: Request, res: Response) => {
    res.json({pong: true});
}