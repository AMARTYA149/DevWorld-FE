import React from "react";
import { useSelector } from "react-redux";

const NavBar = () => {
  const user = useSelector((store) => store.user);
  console.log(user);

  return (
    <div className="navbar bg-base-300">
      <div className="flex-1">👩‍💻 DevTinder</div>
      {user && (
        <div className="flex-none gap-2">
          <div className="form-control">Welcome, {user.firstName}</div>
          <div className="dropdown dropdown-end mx-5 flex">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img alt="user photo" src={user.photoUrl} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>Profile</li>
              <li>Connections</li>

              <li>Requests</li>
              <li>Premium</li>
              <li>Logout</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
