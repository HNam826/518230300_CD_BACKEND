import express from "express";
import { listCategory, createCategory, renderPagecreateCategory, renderPageUpdateCategory, updateCategory, renderPageDeleteCategory, deleteCategory } from "../controllers/categoryController.js";
const routers = express.Router();

routers.get("/", listCategory)


routers.get("/create", renderPagecreateCategory)// render ra create
routers.post("/create", createCategory)

routers.get("/update/:id", renderPageUpdateCategory)// render ra update
routers.post("/update", updateCategory)

routers.get("/delete/:id", renderPageDeleteCategory)// render ra update
routers.post("/delete", deleteCategory)

export default routers;