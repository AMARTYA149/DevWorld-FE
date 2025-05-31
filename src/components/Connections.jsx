import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/connectionSlice";
import UserCard from "./UserCard";
import { useNavigate } from "react-router-dom";

const Connections = () => {
  const connections = useSelector((store) => store.connections);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });

      dispatch(addConnections(res?.data?.data));
    } catch (error) {
      if (error.status === 401 || error.status === 400) {
        console.log("error: ", error);
        return navigate("/login");
      }
    }
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  if (!connections) {
    return;
  }

  if (connections.length === 0) {
    return (
      <h1 className="text-2xl text-bold text-center my-10">
        No Connections found!
      </h1>
    );
  }
  return (
    <div className=" text-center my-10">
      <h1 className="text-2xl text-bold my-5">Connections</h1>
      <div className="flex flex-col items-center text-left gap-10">
        {connections.map((connection, index) => {
          const { firstName, lastName, photoUrl, age, gender, about } =
            connection;
          return (
            <UserCard
              key={index}
              user={{ firstName, lastName, age, gender, about, photoUrl }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Connections;
