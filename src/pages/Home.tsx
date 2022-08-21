import React, { useState } from "react";
import Button from "../components/Button";
import { useQuery } from "react-query";
import QueryStates from "../components/QueryStates";
import UserPreview from "../components/UserPreview";
import { useNavigate } from "react-router-dom";

interface HomeProps {
  setUser: Function;
}

const Home: React.FC<HomeProps> = (props) => {
  const navigate = useNavigate();

  function handleNav(location: string) {
    navigate(location);
  }

  const { isLoading, isError, data } = useQuery(
    "queryUsers",
    async () => {
      const response = await fetch(
        "https://randomuser.me/api/?results=10"
      ).then((response) => response.json());
      return response.results;
    },
    {
      staleTime: 10000 * 1000,
    }
  );

  const [userID, setUserID] = useState<number>(0);

  function updateUser() {
    props.setUser({
      picture: data[userID].picture.large,
      name: data[userID].name.first + " " + data[userID].name.last,
      gender: data[userID].gender,
      age: data[userID].dob.age,
      email: data[userID].email,
      phone: data[userID].phone,
      country: data[userID].location.country,
    });
  }

  function getNextUser() {
    if (userID === data.length - 1) setUserID(0);
    else setUserID(userID + 1);
  }

  function getPreviousUser() {
    if (userID === 0) setUserID(data.length - 1);
    else setUserID(userID - 1);
  }

  console.log(data);

  if (isLoading) return <QueryStates text="Fetching Data" />;

  if (isError) return <QueryStates text="Error Fetching Users..." />;

  return (
    <div className="flex items-center justify-center h-[100vh] w-full bg-gradient-to-tr from-red-300 via-purple-500 to-red-300">
      <div className="rounded-lg w-[800px] h-auto p-4 flex flex-col justify-center items-center space-y-9">
        <div className="space-x-8">
          <Button
            text="Previous"
            onClick={() => {
              getPreviousUser();
            }}
          />
          <Button
            text="Next"
            onClick={() => {
              getNextUser();
            }}
          />
        </div>
        <div>
          <UserPreview
            picture={data[userID].picture.large}
            name={data[userID].name.first}
            gender={data[userID].gender}
            age={data[userID].dob.age}
          />
        </div>
        <div className="flex flex-col space-y-8">
          <Button
            text="Explore"
            onClick={() => {
              updateUser();
              handleNav("/explore");
            }}
          />
          <hr />
          <Button
            text="Go Home"
            onClick={() => {
              handleNav("/");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
