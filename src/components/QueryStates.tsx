import React, { FC } from "react";

interface QueryProps {
  text: string;
}

let QueryStates: FC<QueryProps> = (props) => {
  return (
    <div className="w-full h-[100vh] bg-gray-700 flex justify-center items-center">
      <h1 className="text-5xl font-bold text-white tracking-wider uppercase">
        {props.text}
      </h1>
    </div>
  );
};

export default QueryStates;
