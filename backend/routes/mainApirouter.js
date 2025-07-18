import express from 'express';
import { mainApicontroller } from '../controller/mainApicontroller.js';

const router = express.Router();

router.get('/', mainApicontroller);




export default router;