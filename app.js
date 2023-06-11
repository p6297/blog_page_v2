const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Blog = require("./models/blog");
const blogRoutes = require("./routes/blogRoutes");

const mongo_uri = process.env.MONGO_URL;

const connectToMongoDB = async (mongoURI) => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      connectTimeoutMS: 10000, // Maximum connection timeout in milliseconds
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
  }
};

connectToMongoDB(mongo_uri);



const app = express();

//middlewares
app.use(morgan("tiny"));
 app.use(express.urlencoded({extended:true})) 
 app.use(express.json())
 app.use("/blogs",blogRoutes)


app.set("view engine","ejs");
const PORT= process.env.PORT || 5000

app.get("/",(req,res)=> {   
   res.render("index",{title:"Home"})
})

app.get("/about",(req,res)=> {
    res.render("about",{title:"About"});
})






app.use((req,res)=> {
    res.status(404).render("404",{title:"404"});
})

app.listen(PORT,()=> {
    console.log(`server is running on ${PORT}`)
})



