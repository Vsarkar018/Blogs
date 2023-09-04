const { StatusCodes } = require("http-status-codes");
const BlogRepository = require("../Repository/BlogRepo");

const repository = new BlogRepository();

module.exports = class BlogService {
  constructor() {}

  async createBlog(req, res) {
    try {
      const { userId } = req.user;
      const input = req.body;
      const blog = await repository.createBlog(input, userId);
      res
        .status(StatusCodes.OK)
        .json({ msg: "Blogs Posted Successfully", blog });
    } catch (error) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
    }
  }
  async getBlogs(req, res) {
    try {
      const { userId } = req.user;
      const blogs = await repository.getBlogs(userId);
      if (blogs.length > 0) res.status(StatusCodes.OK).json({ blogs });
      res.status(StatusCodes.OK).json({ msg: "No Blogs Posted" });
    } catch (error) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
    }
  }
  async getBlog(req, res) {
    try {
      const { userId } = req.user;
      const { blogId } = req.body;
      const blogs = await repository.getBlog(userId, blogId);
      res.status(StatusCodes.OK).json({ blogs });
    } catch (error) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
    }
  }
  async editBlog(req, res) {
    try {
      const { userId } = req.user;
      const input = req.body;

      const blog = await repository.editBlog(userId, input);
      res
        .status(StatusCodes.OK)
        .json({ msg: "Blog Edited Successfully", blog });
    } catch (error) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
    }
  }
  async deleteBlog(req, res) {
    try {
      const { userId } = req.user;
      const { blogId } = req.body;
      await repository.deleteBlog(userId, blogId);
      res.status(StatusCodes.OK).json({ msg: "Blog deleted Successfully" });
    } catch (error) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
    }
  }
};
