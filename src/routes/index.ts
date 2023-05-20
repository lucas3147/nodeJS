import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
    let user = {
        name: 'Lucas',
        age: 20
    }

    res.render('home', {user});
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