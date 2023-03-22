

import express from "express";

import {get, create, getAll, remove, Update } from "../controller/product";

const router = express.Router();

router.get("/product",getAll);
router.post("/product",create)
router.put("/product/:id",Update)
router.delete("/product/:id",remove)
router.get("/product/:id",get)
export default router;