import { Request, Response } from 'express';
import { Todo } from '../models/Todos';

export const all = async (req: Request, res: Response) => {
    const list = await Todo.findAll();

    res.json({list});
}


export const add = async (req: Request, res: Response) => {
    if(req.body.title) {
        let newTodo = await Todo.create({
            title: req.body.title,
            done: req.body.done ? true : false
        });

        res.status(201).json({ item: newTodo });
    } else {
        res.json({error: 'Dados não enviados'});
    }
}


export const update = async (req: Request, res: Response) => {
    let id = req.params.id as string;

    let to_do = await Todo.findByPk(id);

    if (to_do) {
        
        if (req.body.title) {
            to_do.title = req.body.title;
        }
        if (req.body.done) {
            switch(req.body.done.toLowerCase()) {
                case 'true':
                case '1':
                    to_do.done = true;
                    break;
                case 'false':
                case '0':
                    to_do.done = false;
            }
        }

        await to_do.save();
        res.json({item: to_do});
    } else {
        res.json({ error: 'Item não encontrado' });
    }
}

export const remove = async (req: Request, res: Response) => {
    let id: string = req.params.id;

    let todo = await Todo.findByPk(id);

    if (todo){
        await todo.destroy();
    }

    res.json({});
}
