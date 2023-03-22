import express from "express";
import mongoose from "mongoose";
import router from "./router/product";


const app = express();

app.use(express.json())

app.use('/api',router);

mongoose.connect("mongodb://localhost:27017/myplay")

export const viteNodeApp = app;