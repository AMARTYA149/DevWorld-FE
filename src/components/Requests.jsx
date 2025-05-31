import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addRequests } from "../utils/requestSlice";
import UserCard from "./UserCard";

const Requests = () => {
  const requests = useSelector((store) => store.requests);
  const dispatch = useDispatch();
  const fetchRequests = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/requests/received", {
        withCredentials: true,
      });
      dispatch(addRequests(res.data.data));
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);
  if (!requests) {
    return;
  }

  if (requests.length === 0) {
    return <h1 className="text-2xl text-bold">No Requests found!</h1>;
  }
  return (
    <div className=" text-center my-10">
      <h1 className="text-2xl text-bold my-5">Connection Requests</h1>
      <div className="flex flex-col items-center text-left gap-10">
        {requests.map((request, index) => {
          const { firstName, lastName, photoUrl, age, gender, about } =
            request.fromUserId;
          return (
            <UserCard
              key={index}
              isConnections={true}
              isRequests={true}
              user={{ firstName, lastName, age, gender, about, photoUrl }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Requests;
