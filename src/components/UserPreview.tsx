import React, { FC } from "react";

interface UserPreviewProps {
  picture: string;
  name: string;
  gender: string;
  age: string;
}

const style = {
  details: `font-bold tracking-widest uppercase text-white text-xl`,
};

let UserPreview: FC<UserPreviewProps> = (props) => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center space-y-2 capitalize">
        <img src={props.picture} alt="/" className="rounded-lg w-[150px]" />
        <p className={`${style.details}`}>{props.name}</p>
        <p className={`${style.details}`}>{props.gender}</p>
        <p className={`${style.details}`}>{props.age}</p>
      </div>
    </div>
  );
};

export default UserPreview;
