import "./Following.css";
import { useEffect } from "react";
import Follow from "../follow/Follow";
import Loading from "../../models/loading/Loading";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { init } from "../../../redux/followingSlice";
import useService from "../../../hooks/useService";

export default function Following() {
  const following = useAppSelector((state) => state.following.following);

  const dispatch = useAppDispatch();

  const followingService = useService();

  useEffect(() => {
    (async () => {
      try {
        const following = await followingService.getFollowing();
        dispatch(init(following));
      } catch (e) {
        alert(e);
      }
    })();
  }, []);

  return (
    <div className="Following">
      {following.length === 0 && <Loading />}
      {following.length > 0 && (
        <>
          <h3>People I follow</h3>
          {following.map((follow) => (
            <Follow key={follow.id} user={follow}></Follow>
          ))}
        </>
      )}
    </div>
  );
}
