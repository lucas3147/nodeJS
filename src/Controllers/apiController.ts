import { unlink } from 'fs/promises';
import {Request, Response} from 'express'; 
import { Sequelize } from 'sequelize';
import { Phrase } from '../Models/Phrases';
import sharp, { Sharp } from 'sharp';

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

export const createPhrase = async (req: Request, res: Response) => {
    let { author, phrase } = req.body;

    let newPhrase = await Phrase.create({ author, phrase });

    res.json({id: newPhrase.id, author, phrase});
}

export const listPhrases = async (req: Request, res: Response) => {
    let list = await Phrase.findAll();

    res.json({list});
}

export const getPhrase = async (req: Request, res: Response) => {
    let { id } = req.params;
    
    let phrase = await Phrase.findByPk(id);

    if(phrase) {
        res.json({ phrase });
    }else{
        res.json({error: 'Frase não encontrada!'});
    }
    
}

export const updatePhrase = async (req: Request, res: Response) => {
    let { id } = req.params;
    let { author, phrase } = req.body;

    let phraseObj = await Phrase.findByPk(id);

    if (phraseObj) {
        phraseObj.author = author;
        phraseObj.phrase = phrase;
        await phraseObj.save();

        res.json({ phrase });
    }else{
        res.json({error: 'Frase não encontrada!'});
    }
    
}

export const deletePhrase = async (req: Request, res: Response) => {
    let { id } = req.params;

    await Phrase.destroy({
        where: {id}
    })

    res.json();
}

export const randomPhrase = async (req: Request, res: Response) => {
    let phrase = await Phrase.findOne({
        order: [
            Sequelize.fn('RAND')
        ]
    })

    if (phrase) {
        res.json({ phrase });
    }else{
        res.json({ error: 'Não há frase cadastradas.' });
    }
    
}

export const uploadFile = async (req: Request, res: Response) => {
    if (req.file) {
        let filename = `${req.file.filename}.jpg`;

        await sharp(req.file.path)
                    .resize(500, 500, {
                        fit: sharp.fit.fill
                    })
                    .toFormat('jpeg')
                    .toFile(`./public/media/${filename}`);

        await unlink(req.file.path);
                
        res.json({image: `${filename}`});
    } else {
        res.status(400).json({error: 'Arquivo inválido'});
    }
}