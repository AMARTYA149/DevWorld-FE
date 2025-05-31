import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { addFeed, removeUserFromFeed } from "../utils/feedSlice";
import { useEffect } from "react";
import UserCard from "./UserCard";

const Feed = () => {
  const feed = useSelector((store) => store.feed);
  const dispatch = useDispatch();

  const handleSendRequest = async (status, userId) => {
    try {
      const res = await axios.post(
        BASE_URL + "/request/send/" + status + "/" + userId,
        {},
        { withCredentials: true }
      );
      dispatch(removeUserFromFeed(userId));
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const getFeed = async () => {
    if (feed) return;
    try {
      const res = await axios.get(BASE_URL + "/feed", {
        withCredentials: true,
      });
      dispatch(addFeed(res.data.data));
    } catch (error) {
      // Handle error
      console.log("Error fetching feed:", error);
    }
  };

  useEffect(() => {
    getFeed();
  }, []);

  if (!feed) {
    return;
  }
  if (feed.length <= 0) {
    return (
      <h1 className="text-2xl text-bold text-center my-10">No new users!</h1>
    );
  }
  return (
    feed && (
      <div className="flex flex-col items-center text-left gap-10 my-10">
        {feed.map((feedItem, index) => {
          const { firstName, lastName, photoUrl, age, gender, about, _id } =
            feedItem;
          return (
            <UserCard
              key={index}
              user={{ firstName, lastName, age, gender, about, photoUrl }}
            >
              <div className="card-actions justify-center my-4">
                <button
                  className="btn btn-primary"
                  onClick={() => handleSendRequest("ignored", _id)}
                >
                  Ignore
                </button>
                <button
                  className="btn btn-secondary"
                  onClick={() => handleSendRequest("interested", _id)}
                >
                  Interested
                </button>
              </div>
            </UserCard>
          );
        })}
      </div>
    )
  );
};

export default Feed;
