import { Outlet } from "react-router-dom";

const UserCard = ({
  user,

  children,
}) => {
  const { _id, firstName, lastName, photoUrl, age, gender, about } = user;
  return (
    <div className="card bg-base-300 w-96 shadow-xl h-150">
      <Outlet />
      <figure>
        <img src={photoUrl} alt="User photo" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl">{firstName + " " + lastName}</h2>
        <p>{about}</p>
        {age && gender && <p>{age + ", " + gender}</p>}

        {children}
      </div>
    </div>
  );
};

export default UserCard;
