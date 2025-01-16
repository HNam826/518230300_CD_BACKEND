import express from "express";
import { listCategory } from "../controllers/categoryController.js";
const routers = express.Router();

routers.get("/", listCategory)

routers.get("/create", function(req, res){
    res.send(" Create Categories")
})

export default routers;