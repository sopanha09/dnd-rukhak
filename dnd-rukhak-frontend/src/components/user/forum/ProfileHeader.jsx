import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import style from "@/styles/user/forum/profile.module.scss";
import { selectCurrentUserId } from "@/features/auth/authSlice";
import { useSelector } from "react-redux";
import ForumNav from "./ForumNav";

const ProfileHeader = ({ user }) => {
  const userId = useSelector(selectCurrentUserId);
  console.log("is meee!!", user);

  return (
    <>
      <ForumNav />

      <Card
        sx={{ backgroundColor: "#B2C8BA", width: "100%", height: "200px" }}
        className={style.header}
      />

      <Box
        display={"flex"}
        gap={2}
        className={style.userInfo}
        sx={{
          alignItems: "center",
          justifyContent: "center",
          padding: "0 1rem",
        }}
      >
        {user?.imageURL ? (
          <Avatar
            variant="rounded"
            src={user?.imageURL}
            sx={{ width: "120px", height: "120px", border: "4px solid white" }}
          />
        ) : (
          <Avatar variant="rounded" sx={{ width: "120px", height: "120px" }}>
            {user?.firstName[0]}
          </Avatar>
        )}

        <Box>
          <Typography variant="h6">
            {user?.firstName} {user?.lastName}
          </Typography>
          <Typography
            variant="caption"
            sx={{ wordBreak: "break-word", fontSize: "13px" }}
          >
            {userId === user?._id
              ? user?.email
              : user?.storeName || user?.role.toUpperCase()}
          </Typography>
        </Box>
      </Box>
    </>
  );
};
export default ProfileHeader;
