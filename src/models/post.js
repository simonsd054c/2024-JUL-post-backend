const mongoose = require("mongoose")

const PostSchema = mongoose.Schema({
    title: String,
    body: String,
    is_published: Boolean,
    category_id: {
        type: mongoose.Types.ObjectId,
        ref: "Category"
    }
})

const Post = mongoose.model("Post", PostSchema)

module.exports = Post