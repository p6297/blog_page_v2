const Blog = require("../models/blog");

const blog_index = async (req, res) => {
  try {
    const response = await Blog.find().sort({ createdAt: -1 }).timeout(10000);
    res.render("blog", { title: "All Blogs", blogs: response });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

const blog_details = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Blog.findById(id);
    res.render("details", { title: "Blog Details", blog: result });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

const blog_create_get = (req, res) => {
  res.render("create", { title: "Create a new Blog" });
};

const blog_create_post = (req, res) => {
  const blog = new Blog(req.body);

  blog
    .save()
    .then((result) => {
      res.redirect("/blogs");
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Internal Server Error");
    });
};

const blog_delete = async (req, res) => {
  try {
    const id = req.params.id;
    await Blog.findByIdAndDelete(id);
    res.json({ redirect: "/blogs" });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  blog_index,
  blog_details,
  blog_create_get,
  blog_create_post,
  blog_delete,
};
