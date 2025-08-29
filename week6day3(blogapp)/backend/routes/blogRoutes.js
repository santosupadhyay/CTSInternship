const express = require('express');
const { createBlog, getAllBlogs, getBlogById, updateBlogById, deleteBlogById, toggleLike, getLikesAnalytics } = require('../controllers/blogController');
const verifyToken = require('../middlewares/authMiddleware')


const router = express.Router();

router.post('/', createBlog);
router.get('/', getAllBlogs);
router.get('/likes-analytics', getLikesAnalytics)
router.get('/:id', getBlogById);
router.put('/:id', updateBlogById);
router.delete('/:id', deleteBlogById);
router.put('/like/:id',verifyToken, toggleLike)

module.exports = router;