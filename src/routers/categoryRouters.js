import express from "express";
import { listCategory, createCategory, renderPagecreateCategory, renderPageUpdateCategory, updateCategory } from "../controllers/categoryController.js";
const routers = express.Router();

routers.get("/", listCategory)


routers.get("/create", renderPagecreateCategory)// render ra create
routers.post("/create", createCategory)

routers.get("/update/:id", renderPageUpdateCategory)// render ra update
routers.post("/update", updateCategory)

export default routers;