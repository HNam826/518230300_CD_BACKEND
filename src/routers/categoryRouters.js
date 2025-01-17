import express from "express";
import { listCategory, createCategory, renderPagecreateCategory } from "../controllers/categoryController.js";
const routers = express.Router();

routers.get("/", listCategory)

routers.get("/create", renderPagecreateCategory)// render ra create
routers.post("/create", createCategory)

export default routers;