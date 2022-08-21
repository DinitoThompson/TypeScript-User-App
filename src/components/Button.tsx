import React, { FC } from "react";

interface ButtonProps {
  text: string;
  onClick: Function;
}

let Button: FC<ButtonProps> = (props) => {
  return (
    <>
      <button
        onClick={() => props.onClick()}
        className="bg-red-500 rounded-full w-[150px] h-11 shadow-lg hover:scale-105 duration-500"
      >
        <span className="font-bold uppercase text-white tracking-widest">
          {props.text}
        </span>
      </button>
    </>
  );
};

export default Button;
