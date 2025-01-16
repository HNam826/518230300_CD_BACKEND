import express from 'express';
import path from "path"
import { title } from 'process';
import routers from './routers/index.js';
import mongoConnect from './mongo/mongoConnecter.js';
const app = express();
const port = 5001
const __dirname = path.resolve()

app.use("/static", express.static(path.join(__dirname, 'public')))

app.set('view engine', 'ejs')
app.set("views", __dirname + "/src/views")
routers(app)


mongoConnect()
app.listen(port, function() {
    console.log("http://localhost:" + port);
    
})