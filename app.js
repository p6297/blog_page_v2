const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const mongo_uri = ("mongodb+srv://partha:partha123@cluster0.w4vuwgk.mongodb.net/blog_app?retryWrites=true&w=majority");

mongoose.connect(mongo_uri,{
    useNewUrlParser:true, useUnifiedTopology:true
})
.then((result)=> {
   console.log(`db connected`)
}).catch((err)=> {
    console.log(err)
})

const app = express();

app.use(morgan("tiny"));


app.set("view engine","ejs");
const PORT= process.env.PORT || 5000

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



