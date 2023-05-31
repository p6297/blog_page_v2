const mongoose = require("mongoose");
const Schema = mongoose.Schema();


const BlogSchema = new Schema ({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    snippet: {
        type:String,
        required:true,
        unique:true,
    },
    body: {
        type:String,
        required:true,
        unique: true,

    }
},{timestamps: true});

const Blog = mongoose.model("Blog",BlogSchema);

module.exports = Blog;

