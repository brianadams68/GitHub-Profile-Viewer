import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Logo from "./Components/Logo";
import UserInfo from "./Routes/UserInfo";
import Users from "./Routes/Users";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-black">
        <div className="container text-gray-200 py-3">
          <Logo />
          <Routes>
            <Route path="/" element={<Users />} />
            <Route path="/:name" element={<UserInfo />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;


