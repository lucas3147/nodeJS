import { Router } from 'express';
import multer from 'multer';

import * as ApiController from '../Controllers/apiController';


const upload = multer({
    dest: './tmp',
    fileFilter: (req, file, cb) => {
        const allowed: string[] = ['image/jpg', 'image/jpeg', 'image/png']

        cb(null, allowed.includes(file.mimetype));
    },
    limits: { fieldSize: 2000000  }
});

/*
const upload = multer({
    storage:  multer.memoryStorage()

});
*/

const router = Router();

router.get('/ping', ApiController.ping);
router.get('/random', ApiController.random);
router.get('/nome/:nome', ApiController.nome);

router.post('/frases', ApiController.createPhrase);
router.get('/frases', ApiController.listPhrases);
router.get('/frase/aleatoria', ApiController.randomPhrase);
router.get('/frases/:id', ApiController.getPhrase);
router.put('/frase/:id', ApiController.updatePhrase);
router.delete('/frase/:id', ApiController.deletePhrase);

router.post('/upload', upload.single('ano-novo'), ApiController.uploadFile);

export default router;