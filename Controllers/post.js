const Post = require('../Models/post')

exports.getPosts = (req,res) => {
    const posts = Post.find().select("_id title body")
    .then((posts) => {
        res.json({posts})
    })
    .catch(err => console.log(err))
}

exports.createPost = (req, res) => {
    const post = new Post(req.body)
    console.log("CREATING POST: ", post)
    console.log("CREATING POST: ", req.body)
    post.save( (err, result) => {
        if(err) {
            return res.status(400).json({
                error: err
            })
        }
        res.json({
            post: result
        })
    })
}