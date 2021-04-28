const express = require('express');
const router = express();
const Post   = require('../models/Post');

//get all posts
router.get('/', async (req,res)=>{
    const posts = await Post.find();
    res.json(posts);
});

//save a post
router.post('/', async (req, res)=>{

    const post = new Post({
        title:req.body.title,
        description: req.body.description
    });    

    const savePost = await post.save(post);

    res.send(savePost);
});

//get a specific post
router.get('/:postId', async (req, res)=>{
    try{
        const post = await Post.findById({_id:req.params.postId});
        res.json(post);
    }catch(err){
        res.send(err)
    }
});

//delete a post
router.delete('/:postId', async (req,res)=>{
    try{
        const remove = await Post.remove({_id:req.params.postId});
        res.json(remove);
    }catch(err){
        res.send(err)
    }
});

//update a post
router.patch('/:postId', async (req, res)=>{
    try{
        const updatedPost = await Post.updateOne({_id:req.params.postId}, {
            $set:{title: req.body.title, description: req.body.description}
        });

        res.json(updatedPost);

    }catch(err){
        res.send(err)
    }
});

module.exports = router;