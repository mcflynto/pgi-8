import React from "react";
import { LiveDataType } from "../../hooks/useLiveData";
import "./LiveData.css";

type LiveDataProps = {
  liveData: LiveDataType;
};

const LiveData = ({ liveData }: LiveDataProps) => {
  return (
    <div className="live-data">
      <div>
        Time: {new Date(liveData.time || "").toLocaleTimeString("de-DE")} CEST
      </div>
      <div>
        Work load (totally accurate):{" "}
        {liveData.value ? Math.round(liveData.value * 100) : ""}%
      </div>
      <div className={`${liveData.extremeMode ? "ex-mode" : ""}`}>
        EX mode: {liveData.extremeMode ? "On" : "Off"}
      </div>
    </div>
  );
};

export default LiveData;
