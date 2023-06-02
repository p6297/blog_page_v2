const express = require("express");
const router = express.Router();
const blogcontrollers = require("../controllers/blogControllers")


router.get("/",blogcontrollers.blog_index)

router.get("/create",blogcontrollers.blog_create_get)

router.post("/",blogcontrollers.blog_create_post)

router.get("/:id",blogcontrollers.blog_details)

router.delete("/:id",blogcontrollers.blog_delete);




module.exports = router;






