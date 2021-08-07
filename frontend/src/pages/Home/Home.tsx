import React from "react";
import { Link } from "react-router-dom";
import useLiveData from "../../hooks/useLiveData";

const Home = () => {
  const liveData = useLiveData();

  const handleSendInput = () => {
    if (liveData.data?.extremeMode) {
      liveData.send("deactivateExtremeMode");
    } else {
      liveData.send("activateExtremeMode");
    }
  };

  return (
    <div>
      <h1>PGI-8</h1>
      <div>
        <div>{liveData.data?.time}</div>
        <div>{liveData.data?.value}</div>
        <div>{liveData.data?.extremeMode ? "On" : "Off"}</div>
      </div>

      <Link to="/about">About</Link>

      <button onClick={() => handleSendInput()}>
        {liveData.data?.extremeMode ? "Deactivate" : "Activate"}
      </button>
    </div>
  );
};

export default Home;
