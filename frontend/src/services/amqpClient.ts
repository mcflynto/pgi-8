import { Client } from "@stomp/stompjs";

const client = new Client();

client.brokerURL = "ws://localhost:15674/ws";
client.connectHeaders = {
  login: "guest",
  passcode: "guest",
};
// Activate debug mode
// client.debug = (str) => {
//   console.log(str);
// };
client.reconnectDelay = 5000;
client.heartbeatIncoming = 4000;
client.heartbeatOutgoing = 4000;

export default client;
