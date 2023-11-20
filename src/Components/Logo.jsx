import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="flex border-b border-gray-500 pb-2 justify-center items-center">
        <img
          src="https://cdn3.iconfinder.com/data/icons/inficons/512/github.png"
          className="w-24 rounded-full"
          alt="GitHub Icon"
        />
      <h1 className="text-2xl px-2">GitHub Viewer</h1>
    </div>
  );
};

export default Logo;