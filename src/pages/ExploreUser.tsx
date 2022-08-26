import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import QueryStates from "../components/QueryStates";
import UserContext from "../context/UserContext";

const style = {
  details: `font-bold tracking-widest uppercase text-white text-xl`,
};

const ExploreUser: React.FC<{}> = () => {
  const user = useContext(UserContext);
  const [redirect] = useState<number>(5000);
  const navigate = useNavigate();

  function handleNav(location: string) {
    navigate(location);
  }

  useEffect(() => {
    <QueryStates text="Sorry, No User To Explore..." />;
    if (user.name === "") {
      setInterval(() => {
        handleNav("/home");
      }, redirect);
    }
  }, []);

  return (
    <div className="flex items-center justify-center h-[100vh] w-full bg-gradient-to-tr from-red-300 via-purple-500 to-red-300">
      <div className="rounded-lg w-[800px] h-auto p-4 flex flex-col justify-center items-center space-y-9">
        {user.picture === "" ? (
          <div>
            <h1 className={`${style.details}`}>
              Please Select A User To Explore <br /> Going Back Home In:{" "}
              {redirect / 1000} Seconds
            </h1>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center space-y-2 capitalize">
            <div className="w-[500px] h-[350px] flex justify-center bg-gradient-to-tr from-red-300 via-purple-500 to-red-300">
              {/* picture: "",
                name: "",
                gender: "",
                age: "",
                email: "",
                phone: "",
                cell: "",
                country: "",
                address: "", 
                */}
              <div className="flex flex-col items-center justify-center space-y-2">
                <div className="flex flex-col justify-center items-center">
                  <img
                    src={user.picture}
                    alt="No User"
                    className="rounded-lg shadow-md"
                  />
                  <p className="font-bold text-2xl tracking-wider">
                    {user.name}
                  </p>
                </div>
                <div className="flex flex-row w-full items-center justify-center space-x-7">
                  <p>{user.gender}</p>
                  <span>{"|"}</span>
                  <p>{user.age}</p>
                </div>
                <p>{user.email}</p>
                <div className="flex flex-row w-full items-center justify-center space-x-7">
                  <p>{user.phone}</p>
                  <span>{"|"}</span>
                  <p>{user.cell}</p>
                </div>
                <p>{user.address}</p>
              </div>
            </div>
            <hr />
            <div className="flex flex-col space-y-8">
              <Button
                text="Go Home"
                onClick={() => {
                  handleNav("/home");
                }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExploreUser;
