import express from 'express';
import { getAllParts } from '../controllers/partsController.js';
import { getAllParts, createPart } from '../controllers/partsController.js';


const router = express.Router();

router.get('/', getAllParts);
router.post('/', createPart); // route για προσθήκη part
router.get('/:id', getPartById); //apo id

export default router;