import React from "react";

const Tabs = ({ type, setType }) => {
  return (
    <>
      <button
        className={`${type === "repos" && "text-sky-700"}`}
        onClick={() => setType("repos")}
      >
        Repositories
      </button>
      <button
        className={`${type === "followers" && "text-sky-700"}`}
        onClick={() => setType("followers")}
      >
        followers
      </button>
    </>
  );
};

export default Tabs;