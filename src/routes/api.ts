import { Router } from 'express';
import multer from 'multer';

import * as ApiController from '../Controllers/apiController';

const storageConfig = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './tmp');
    },
    filename: (req, file, cb) => {
        let typeExtension = (file.mimetype.slice(file.mimetype.indexOf('/')+1))
        cb(null, `${file.fieldname}${Date.now()}.${typeExtension}`);
    }
})


const upload = multer({
    storage: storageConfig

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

router.post('/upload', upload.single('avatar'), ApiController.uploadFile);

export default router;