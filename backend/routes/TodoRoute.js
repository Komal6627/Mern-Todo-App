import express from "express";
import { createList, deleteList, getList, updateList,  } from "../controllers/TodoControllers.js";

const router = express.Router();

router.get('/',getList);
router.post('/',createList);
router.put('/:id',updateList);
router.delete('/:id',deleteList);

export default router;