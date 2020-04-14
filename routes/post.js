const express = require('express')
const postControllers = require('../Controllers/post')

const router = express.Router()

router.get('/', postControllers.getPosts)
router.post('/post', postControllers.createPost)

module.exports = router;