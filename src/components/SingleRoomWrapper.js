// SingleRoomWrapper.js
import React from "react";
import { useParams } from "react-router-dom";
import SingleRoom from "../pages/SingleRoom";

function SingleRoomWrapper() {
  const { slug } = useParams();
  return <SingleRoom slug={slug} />;
}

export default SingleRoomWrapper;
