import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { addFeed } from "../utils/feedSlice";
import { useEffect } from "react";
import UserCard from "./UserCard";

const Feed = () => {
  const feed = useSelector((store) => store.feed);
  const dispatch = useDispatch();

  const getFeed = async () => {
    if (feed) return;
    try {
      const res = await axios.get(BASE_URL + "/feed", {
        withCredentials: true,
      });
      dispatch(addFeed(res.data));
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
  return (
    feed && (
      // <div className="flex justify-center my-10">
      //   <UserCard user={feed.data[0]} />
      // </div>

      <div className="flex flex-col items-center text-left gap-10 my-10">
        {feed.data.map((feedItem, index) => {
          const { firstName, lastName, photoUrl, age, gender, about } =
            feedItem;
          return (
            <UserCard
              key={index}
              isConnections={false}
              user={{ firstName, lastName, age, gender, about, photoUrl }}
            />
          );
        })}
      </div>
    )
  );
};

export default Feed;
