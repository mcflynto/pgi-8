import useClient from "./useClient";
import React, { useCallback, useEffect, useState } from "react";

export type LiveDataType = {
  time: string;
  value: number;
  extremeMode: boolean;
};

const useGetLiveData = () => {
  const [data, setData] = useState<LiveDataType>();
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
  }, []);

  const send = useCallback(
    (msg: string) => {
      if (!client.connected) {
        console.error("Client not connected!");
        return false;
      }

      if (msg.length > 0) {
        client.publish({
          destination: "/exchange/data/live.input",
          body: msg,
        });
      }

      return true;
    },
    [client.connected]
  );

  return { data, send };
};

export default useGetLiveData;
