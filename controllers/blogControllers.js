//blog_index, blog_details, blog_create_get , blog_create_post, blog_delete
const Blog = require("../models/blog");


const blog_index = async(req,res) => {
    try {
        const response = await Blog.find().sort({createdAt: -1});
        res.render("blog",{title:"all blogs", blogs:response})
        
    } catch (error) {
        throw error;
        
    }
}

const blog_details = async(req,res) => {
    try {
        const id = (req.params.id)
        const result = await Blog.findById(id)
        res.render("details",{title:"Blog Details", blog:result,})


        
    } catch (error) {
        throw error;
        
    }
}

const blog_create_get = (req,res) => {
    res.render("create",{title:"Create a new Blog"})
}



const blog_create_post = (req, res) => {
    const blog = new Blog(req.body);

    blog.save()
        .then((result) => {
            res.redirect("/blogs");
        })
        .catch((err) => {
            if (err.code === 11000 && err.keyPattern && err.keyPattern.snippet && err.keyPattern.body) {
                // Duplicate key error for the snippet field
                const duplicateValue = err.keyValue.snippet;
                res.status(400).send(`The snippet '${duplicateValue}' already exists.`);
            } else {
                throw err;
            }
        });
};


const blog_delete = (req,res) => {
    try {
        const id = (req.params.id)
        Blog.findByIdAndDelete(id)
        .then((result)=> {
            res.json({redirect: "/blogs"})

        })
    } catch (error) {
        throw error;
        
    }

}




module.exports ={
    blog_index,
    blog_details,
    blog_create_get,
    blog_create_post,
    blog_delete


}