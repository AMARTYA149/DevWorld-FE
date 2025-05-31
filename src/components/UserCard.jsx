const UserCard = ({ user, isConnections = false, isRequests = false }) => {
  const { _id, firstName, lastName, photoUrl, age, gender, about } = user;
  return (
    <div className="card bg-base-300 w-96 shadow-xl h-150">
      <figure>
        <img src={photoUrl} alt="User photo" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl">{firstName + " " + lastName}</h2>
        <p>{about}</p>
        {age && gender && <p>{age + ", " + gender}</p>}

        {!isConnections && (
          <div className="card-actions justify-center my-4">
            <button className="btn btn-primary">Ignore</button>
            <button className="btn btn-secondary">Interested</button>
          </div>
        )}

        {isRequests && (
          <div className="card-actions justify-center my-4">
            <button className="btn btn-primary">Accept</button>
            <button className="btn btn-secondary">Reject</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserCard;
