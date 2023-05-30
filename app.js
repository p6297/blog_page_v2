const express = require("express");

const app = express();
app.set("view engine","ejs");
const PORT = process.env.PORT || 5000

app.get("/",(req,res)=> {   
   res.render("index",{title:"Home"})
})

app.get("/about",(req,res)=> {
    res.render("about",{title:"About"});
})

app.get("/blogs",(req,res)=> {
    const blogs = [{name:"pjsbgsjs sosjsjsks kssksksk",snippet:"paiaojhskssls sjsjskslssps sjsksssosjsjs sjsjssksksks"},
    {name:"pjsbgsjs sosjsjsks kssksksk",snippet:"paiaojhskssls sjsjskslssps sjsksssosjsjs sjsjssksksks"},
    {name:"pjsbgsjs sosjsjsks kssksksk",snippet:"paiaojhskssls sjsjskslssps sjsksssosjsjs sjsjssksksks"},
]

    res.render("blog",{title:"Blogs",blogs});
})

app.get("/blogs/create",(req,res)=> {
    res.render("create",{title:"Create a new Blog"})
})

app.use((req,res)=> {
    res.status(404).render("404",{title:"404"});
})



app.listen(PORT,()=> {
    console.log(`server is running on ${PORT}`)
})