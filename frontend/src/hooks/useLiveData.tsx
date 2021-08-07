import useClient from "./useClient";
import React, { useEffect, useState } from "react";
import { uuidv4 } from "../helpers/uuid";

export type liveData = {
  time: Date;
  value: number;
  extremeMode: boolean;
};

const useGetLiveData = () => {
  const [data, setData] = useState<liveData>();
  const client = useClient();

  useEffect(() => {
    client.onConnect = () => {
      client.subscribe("/exchange/data/live.output", (msg) =>
        setData(JSON.parse(msg.body))
      );
    };

    client.activate();

    return () => {
      client.deactivate();
    };
  });

  const send = (msg: string) => {
    if (!client.connected) {
      console.error("Client not connected!");
    }

    if (msg.length > 0) {
      client.publish({
        destination: "/exchange/data/live.input",
        body: msg,
      });
    }

    return true;
  };

  return { data, send };
};

export default useGetLiveData;
