const Blog = require("../models/Blogs");

const createBlog = async (request, response) => {
  try {
    const { title, content, author, image, tags } = request.body;

    if (!title || !content || !author) {
      response.status(400).json({
        success: false,
        message: "Title, content and author are required",
      });
    }
    const newBlog = await Blog.create({
      title,
      content,
      author,
      image,
      tags,
    });

    response.status(201).json({
      success: true,
      message: "Post created successfully",
      data: newBlog,
    });
  } catch (error) {
    response.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getAllBlogs = async (request, response) => {
  try {
    const blogs = await Blog.find()
      .populate("author", "name email")
      .sort({ createdAt: -1 });
    response.status(200).json({
      success: true,
      count: blogs.length,
      data: blogs,
    });
  } catch (error) {
    return response.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getBlogById = async (request, response) => {
  try {
    const { id } = request.params;
    const blog = await Blog.findById(id).populate("author", "name email");

    if (!blog) {
      return response.status(404).json({
        success: false,
        message: "Post not found",
      });
    }
    response.status(200).json({
      success: true,
      data: blog,
    });
  } catch (error) {
    return response.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
const updateBlogById = async (request, response) => {
  try {
    const { id } = request.params;

    const updatedBlog = await Blog.findByIdAndUpdate(
      id,
      { title, content, image, tags },
      { new: true, runValidators: true }
    );
    if (!updatedBlog) {
      return response.status(404).json({
        success: false,
        message: "Post not found",
      });
    }

    response.status(200).json({
      success: true,
      message: "Blog updated successfully",
      data: updatedBlog,
    });
  } catch (error) {
    return response.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
const deleteBlogById = async (request, response) => {
  try {
    const { id } = request.params;

    const deletedBlog = await Blog.findByIdAndDelete(id);

    if (!deletedBlog) {
      return response.status(404).json({
        success: false,
        message: "Post not found",
      });
    }

    response.status(200).json({
      success: true,
      message: "Post deleted successfully",
    });
  } catch (error) {
    return response.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const toggleLike = async (request, response) => {
  try {
    const { id } = request.params;
    const { userId } = request.user;

    const blog = await Blog.findById(id);

    if (!blog) {
      return response.status(404).json({
        success: false,
        message: "Post not found",
      });
    }

    const index = blog.likes.indexOf(userId);

    if (index == -1) {
      blog.likes.push(id); //this means adding a like
    } else {
      blog.likes.splice(index, 1);
    }

    await blog.save();

    response.status(200).json({
      success: true,
      likes: blog.likes.length,
    });
  } catch (error) {
    return response.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getLikesAnalytics = async (request, response) => {
  try {
    const blogs = await Blog.find().select("title likes");
    const data = blogs.map(blog => ({
      title: blog.title.split(' ')[1],
      likes: blog.likes.length,
    }));
    response.status(200).json({
      success: true,
      data:data
    });
  } catch (error) {
    return response.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlogById,
  deleteBlogById,
  toggleLike,
  getLikesAnalytics,
};
