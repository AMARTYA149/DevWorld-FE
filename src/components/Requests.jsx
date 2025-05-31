import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addRequests, removeRequest } from "../utils/requestSlice";
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

  const reviewRequests = async (status, _id) => {
    try {
      const res = await axios.post(
        BASE_URL + "/request/review/" + status + "/" + _id,
        {},
        { withCredentials: true }
      );

      dispatch(removeRequest(_id));
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
    return (
      <h1 className="text-2xl text-bold text-center my-10">
        No Requests found!
      </h1>
    );
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
              user={{ firstName, lastName, age, gender, about, photoUrl }}
            >
              <div className="card-actions justify-center my-4">
                <button
                  className="btn btn-primary"
                  onClick={() => reviewRequests("accepted", request._id)}
                >
                  Accept
                </button>
                <button
                  className="btn btn-secondary"
                  onClick={() => reviewRequests("rejected", request._id)}
                >
                  Reject
                </button>
              </div>
            </UserCard>
          );
        })}
      </div>
    </div>
  );
};

export default Requests;
