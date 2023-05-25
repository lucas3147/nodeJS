import { Request, Response } from 'express';
import { createMenuObject } from '../helpers/createMenuObject'
import { Pet } from '../models/Pet';

export const home = (req: Request, res: Response) => {
    res.render('pages/page', {
        menu: createMenuObject('all'),
        banner: {
            title: 'Todos os animais',
            background: 'allanimals.jpg'
        },
        list: Pet.getAll()
    });
};

export const dogs = (req: Request, res: Response) => {
    res.render('pages/page', {
        menu: createMenuObject('dog'),
        banner: {
            title: 'Cachorros',
            background: 'banner_dog.jpg'
        },
        list: Pet.getFromType('dog')
    });
};

export const cats = (req: Request, res: Response) => {
    res.render('pages/page', {
        menu: createMenuObject('cat'),
        banner: {
            title: 'Gatos',
            background: 'banner_cat.jpg'
        },
        list: Pet.getFromType('cat')
    });
};

export const fishes = (req: Request, res: Response) => {
    res.render('pages/page', {
        menu: createMenuObject('fish'),
        banner: {
            title: 'Peixes',
            background: 'banner_fish.jpg'
        },
        list: Pet.getFromType('fish')
    });
};