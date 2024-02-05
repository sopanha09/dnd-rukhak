import PostCard from "@/components/user/forum/PostCard";
import { useParams } from "react-router-dom";
import { useGetPostQuery } from "@/features/api/post.api";
import { Box } from "@mui/material";
import CommentPage from "../../Comments/CommentPage";
import ForumNav from "@/components/user/forum/ForumNav";

const PostDetail = () => {
  let { postId } = useParams();

  const { data, isLoading } = useGetPostQuery(postId);
  if (!isLoading)
    return (
      <>
        <ForumNav label="Post Detail" />
        <Box sx={{ padding: "1rem" }}>
          <PostCard post={data.data} />
          <CommentPage postId={data.data._id} />
        </Box>
      </>
    );
};
export default PostDetail;
