import express from "express";
import { createList, getList,  } from "../controllers/TodoControllers.js";

const router = express.Router();

router.get('/',getList);
router.post('/',createList);


export default router;