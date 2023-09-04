require("dotenv");
const express = require("express");
const app = express();
app.use(express.json());

const connectDb = require("./utils/ConnectDb");

const UserRoutes = require("./Routes/UserRoutes");
const BlogsRoutes = require("./Routes/BlogsRoutes");
const authMiddleware = require("./Middleware/auth");

connectDb()
  .then(() => console.log("Database connected"))
  .catch((err) => console.log(err));

app.use("/user", UserRoutes);
app.use("/blogs", authMiddleware, BlogsRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () =>
  console.log(`Server is listenting on the port ${port}...`)
);
