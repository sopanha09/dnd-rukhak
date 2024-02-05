import catchAsync from "@/utils/catchAsync.js";
import factory from "./factory.js";
import postService from "@/services/post.service.js";

const selectFields = [
  "firstName",
  "lastName",
  "imageURL",
  "storeName",
  "role",
  "email",
];
const postController = {
  getAllPosts: factory.getAll(postService.getAll, "author", selectFields),
  getPost: factory.getById(postService.get, "author", selectFields),
  createPost: factory.create(postService.create),
  updatePost: factory.updateById(postService.update),
  deletePost: factory.deleteById(postService.delete),
  reactPost: catchAsync(async (req, res) => {
    const { userId } = req.body;
    const { id } = req.params;
    const updatedPost = postService.reactPost(userId, id);
    res.status(204).json({
      status: "success",
      data: updatedPost,
    });
  }),
  getPersonalPosts: catchAsync(async (req, res, next) => {
    const { userId } = req.params;
    const posts = await postService.getPersonalPost(
      userId,
      "author",
      selectFields
    );
    res.status(200).json({
      status: "success",
      data: posts,
    });
  }),
};

export default postController;
