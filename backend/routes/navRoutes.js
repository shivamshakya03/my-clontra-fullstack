import express from 'express';
import { navRouterController, navMenRouterController} from '../controller/navRouteController.js';

const router = express.Router();

router.get('/', navRouterController)
router.get('/:category', navMenRouterController)







export default router;
