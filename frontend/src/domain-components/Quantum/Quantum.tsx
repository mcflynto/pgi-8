import React, { useEffect, useState } from "react";
import useGetLiveData from "../../hooks/useLiveData";
import Button from "../../ui-components/Button/Button";
import Fire from "../../ui-components/Fire/Fire";
import LiveData from "../../ui-components/LiveData/LiveData";
import LoadingText from "../../ui-components/LoadingText/LoadingText";
import "./Quantum.css";

const Quantum = () => {
  const [started, setStarted] = useState(false);
  const [live, setLive] = useState(false);
  const liveData = useGetLiveData();

  useEffect(() => {
    if (started) {
      setTimeout(() => setLive(true), 12000);
    }
  }, [started]);

  const handleSendInput = () => {
    if (liveData.data?.extremeMode) {
      liveData.send("deactivateExtremeMode");
    } else {
      liveData.send("activateExtremeMode");
    }
  };

  return (
    <div className="quantum">
      <div className="case">
        <div className="case-upper">
          <div className="screen">
            {started && <LoadingText />}

            {live && liveData.data && <LiveData liveData={liveData.data} />}

            {live && !liveData.data && <div>Currently not available...</div>}
          </div>
        </div>
        <div className="case-lower">
          <Button onClick={() => setStarted(true)} disabled={started}>
            {started ? "🔋" : "⚡"}
          </Button>
          <Button onClick={() => handleSendInput()} disabled={!live}>
            {liveData.data?.extremeMode ? "🧯" : "🔥"}
          </Button>
        </div>

        {liveData.data?.extremeMode && <Fire />}
      </div>
      <div className="stand" />
      <div className="stand-lower" />
    </div>
  );
};

export default Quantum;
