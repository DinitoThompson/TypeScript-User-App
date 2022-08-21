import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const Welcome: React.FC<{}> = () => {
  const navigate = useNavigate();

  function handleContinue() {
    navigate("home");
  }

  return (
    <div className="flex items-center justify-center p-5 h-[100vh] w-full bg-gradient-to-tr from-purple-500 via-red-300 to-purple-500">
      <div className="flex flex-col justify-between items-center space-y-11">
        <h1 className="text-7xl font-bold text-white tracking-wider uppercase">
          User Generator
        </h1>
        <Button text="Continue" onClick={() => handleContinue()} />
      </div>
    </div>
  );
};

export default Welcome;
