const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const BlogSchema = new Schema ({
    title: {
        type: String,
        unique: true["title must be unique"],
    },
    snippet: {
        type:String,
        unique:true,
    },
    body: {
        type:String,
        unique: true,

    },
    img: {
        data: Buffer,
        contentType: String
    }
},{timestamps: true});

const Blog = mongoose.model("Blog",BlogSchema);

module.exports = Blog;

