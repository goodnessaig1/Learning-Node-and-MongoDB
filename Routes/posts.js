const express = require('express')

const router = express.Router();
const Post = require('./Models/Post');


//  GETS BACK ALL THE POST
router.get('/', async (req, res) => {
    try{
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.json({ message: err });
    }
 })

//  router.get('/specific', (req, res) => {
//     res.send('We are on post specific');
//  })

//  SUBMITS SPECIFIC POST
router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    })
    try {
    const savedPost = await post.save();
    res.json(savedPost)
    }
    catch (err) {
        res.json({ message: err });
    }
    // console.log(req.body)
});


//   SPECIFIC POST
router.get('/:postId', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        res.json(post);
    } catch (err) {
        res.json({ message: err });
    }
});

//  DELETE SPECIFIC POST

router.delete('/:postId', async (req, res) => {
    try {
const removedPost = await Post.remove({_id: req.params.postId });
res.json(removedPost);
} catch (err) {
    res.json({ message: err });
}
})

//  UPDATE A POST
router.param('/:postId',  async(req, res) => {
    try {
        const updatedPost = await Post.udatedOne({_id: req.params.postId}, { $set: {title: req.body.title} });
        res.json(updatedPost);
    } catch (err) {
        res.json({ message: err });
    }
})

 module.exports = router;