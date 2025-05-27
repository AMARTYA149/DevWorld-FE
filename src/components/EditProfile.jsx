import { useState } from "react";

const EditProfile = ({ user }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [about, setAbout] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");

  const [error, setError] = useState("");
  return (
    <div className="flex justify-center my-10">
      <div className="card card-border bg-base-300 w-96">
        <div className="card-body">
          <h2 className="card-title justify-center">Edit Profile</h2>

          <label className="form-control w-full max-w-xs my-2">
            <div className="label">
              <span className="label-text">First Name:</span>
            </div>
            <input
              type="text"
              value={firstName}
              className="input input-bordered w-full max-w-xs"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </label>

          <label className="form-control w-full max-w-xs my-2">
            <div className="label">
              <span className="label-text">Last Name:</span>
            </div>
            <input
              type="text"
              value={lastName}
              className="input input-bordered w-full max-w-xs"
              onChange={(e) => setLastName(e.target.value)}
            />
          </label>

          <label className="form-control w-full max-w-xs my-2">
            <div className="label">
              <span className="label-text">Age:</span>
            </div>
            <input
              type="text"
              value={age}
              className="input input-bordered w-full max-w-xs"
              onChange={(e) => setAge(e.target.value)}
            />
          </label>

          <label className="form-control w-full max-w-xs my-2">
            <div className="label">
              <span className="label-text">Gender:</span>
            </div>
            <input
              type="text"
              value={gender}
              className="input input-bordered w-full max-w-xs"
              onChange={(e) => setGender(e.target.value)}
            />
          </label>

          <label className="form-control w-full max-w-xs my-2">
            <div className="label">
              <span className="label-text">Photo Url:</span>
            </div>
            <input
              type="text"
              value={photoUrl}
              className="input input-bordered w-full max-w-xs"
              onChange={(e) => setPhotoUrl(e.target.value)}
            />
          </label>

          <label className="form-control w-full max-w-xs my-2">
            <div className="label">
              <span className="label-text">About:</span>
            </div>
            <input
              type="text"
              value={about}
              className="input input-bordered w-full max-w-xs"
              onChange={(e) => setAbout(e.target.value)}
            />
          </label>

          <p className="text-red-500">{error}</p>
          <div className="card-actions justify-center my-2">
            <button className="btn btn-primary">Save Profile</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EditProfile;
