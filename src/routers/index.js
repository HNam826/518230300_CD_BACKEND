import categoryRouters from "./categoryRouters.js"

export default function routers(app){
    app.use("/categories", categoryRouters)
    app.get('/', (req, res)=>{
        res.render("pages/index", {
            title: "Homepage"
        })
    })
    
    app.get('/components', (req, res)=>{
        res.render("pages/components", {
            title: "components"
        })
    })
    
    app.get('/form', (req, res)=>{
        res.render("pages/form", {
            title: "form"
        })
    })
    
    app.get('/icons', (req, res)=>{
        res.render("pages/icons", {
            title: "Icons"
        })
    })
    
    app.get('/tables', (req, res)=>{
        res.render("pages/tables", {
            title: "tables"
        })
    })
    
    app.get('/typography', (req, res)=>{
        res.render("pages/typography", {
            title: "typography"
        })
    })
    
    app.get('/notifications', (req, res)=>{
        res.render("pages/notifications", {
            title: "notifications"
        })
    })  
    
    app.get('/index', (req, res)=>{
        res.render("pages/index", {
            title: "Home"
        })
    })
}