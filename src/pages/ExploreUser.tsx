import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import UserContext from "../context/UserContext";

const style = {
  details: `font-bold tracking-widest uppercase text-white text-xl`,
};

const ExploreUser: React.FC<{}> = () => {
  const user = useContext(UserContext);
  const navigate = useNavigate();

  function handleNav(location: string) {
    navigate(location);
  }

  return (
    <div className="flex items-center justify-center h-[100vh] w-full bg-gradient-to-tr from-red-300 via-purple-500 to-red-300">
      <div className="rounded-lg w-[800px] h-auto p-4 flex flex-col justify-center items-center space-y-9">
        <div>
          <div className="flex flex-col items-center justify-center space-y-2 capitalize">
            <img src={user.picture} alt="/" className="rounded-lg w-[150px]" />
            <p className={`${style.details}`}>{user.name}</p>
            <p className={`${style.details}`}>{user.gender}</p>
            <p className={`${style.details}`}>{user.age}</p>
            <p className={`${style.details}`}>{user.email}</p>
            <p className={`${style.details}`}>{user.phone}</p>
            <p className={`${style.details}`}>{user.country}</p>
          </div>
        </div>
        <div className="flex flex-col space-y-8">
          <hr />
          <Button
            text="Go Home"
            onClick={() => {
              handleNav("/home");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ExploreUser;
