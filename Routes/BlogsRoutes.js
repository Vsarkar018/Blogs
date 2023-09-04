const BlogService = require("../Service/BlogService");
const express = require("express");
const service = new BlogService();

const router = express();

router.route("/").get(service.getBlogs).post(service.createBlog);
router
  .route("/:id")
  .get(service.getBlog)
  .put(service.editBlog)
  .delete(service.deleteBlog);

module.exports = router;
