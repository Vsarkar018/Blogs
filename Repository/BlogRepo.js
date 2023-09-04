const User = require("../Models/UserModel");
const Blogs = require("../models/BlogModel");

module.exports = class BlogRepository {
  constructor() {}
  async createBlog({ title, content }) {
    const blog = await Blogs.create({ title, content });
    return blog;
  }
  async getBlogs(userId) {
    const blogs = await User.find({ userId: userId }).populate({
      path: "Blogs",
      model: "blogs",
    });
    return blogs;
  }
  async getBlogs(blogId) {
    const blog = await Blogs.findById(blogId);
    return blog ? blog : false;
  }
  async deleteBlog(userId, blogId) {
    await Blogs.deleteOne({ userId: userId, _id: blogId });
    return true;
  }
  async editBlog(userId, { blogId, title, content }) {
    const blog = await Blogs.updateOne(
      { userId, _id: blogId },
      { title, content },
      { new: true }
    );
  }
};
