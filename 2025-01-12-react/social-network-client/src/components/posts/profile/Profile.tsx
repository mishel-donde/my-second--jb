import { useEffect } from "react";
import "./Profile.css";
import profile from "../../services/auth-aware/profile";
import Post from "../post/Post";
import NewPost from "../new/NewPost";
import Loading from "../../models/loading/Loading";
import useTitle from "../../../hooks/useTitle";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { init } from "../../../redux/profileSlice";
import ProfileService from "../../services/auth-aware/profile";
import useService from "../../../hooks/useService";

export default function Profile(): JSX.Element {
  useTitle("SN - Profile");

  const profileService = useService(ProfileService);

  const posts = useAppSelector((state) => state.profile.posts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      try {
        if (posts.length === 0) {
          const postsFromServer = await profile.getProfile();
          dispatch(init(postsFromServer));
        }
      } catch (e) {
        alert(e);
      }
    })();
  }, []);

  return (
    <div className="Profile">
      {posts.length === 0 && <Loading />}

      {posts.length > 0 && (
        <>
          <NewPost />
          {posts.map((p) => (
            <Post key={p.id} post={p} isAllowActions={true} />
          ))}
        </>
      )}
    </div>
  );
}
