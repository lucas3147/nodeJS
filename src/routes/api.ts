import { Router } from 'express';

import * as ApiController from '../Controllers/apiController';

const router = Router();

router.get('/ping', ApiController.ping);
router.get('/random', ApiController.random);
router.get('/nome/:nome', ApiController.nome);

export default router;