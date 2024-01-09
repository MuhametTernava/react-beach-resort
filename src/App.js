import React from "react";
import "./App.css";

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import SingleRoomWrapper from "./components/SingleRoomWrapper";

import Navbar from "./components/Navbar";

// Import Routes instead of Switch
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {" "}
        {/* Use Routes instead of Switch */}
        <Route exact path="/" element={<Home />} />
        <Route exact path="/rooms/" element={<Rooms />} />
        <Route exact path="/rooms/:slug" element={<SingleRoomWrapper />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
