import PostList from "./posts/PostList";
import { Route, Routes } from "react-router-dom";
import Profile from "./profile/Profile";
import PostEditor from "./posts/PostEditor";
import PostDetail from "./posts/PostDetail";

const ForumPage = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/new-post" element={<PostEditor />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/:postId/comments" element={<PostDetail />} />
      </Routes>
    </>
  );
};

export default ForumPage;
