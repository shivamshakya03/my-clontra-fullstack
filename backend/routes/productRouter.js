import express from 'express';
import { productApiController,productfilterApiController } from '../controller/productRouterController.js';


const router = express.Router();

router.get('/', productApiController);
router.get('/filter', productfilterApiController);







export default router;
