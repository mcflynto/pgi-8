const amqp = require("amqplib/callback_api");

const Store = require("../store/store");

const emit = async () => {
  return amqp.connect(
    "amqp://localhost",
    function (connectionError, connection) {
      if (connectionError) {
        throw connectionError;
      }

      connection.createChannel(function (channelError, channel) {
        if (channelError) {
          throw channelError;
        }

        const exchange = "data";
        const key = "live.output";
        const store = Store;
        const getFakeData = () => {
          const data = {
            time: Date.now(),
            value: Math.random(),
            extremeMode: store.extremeMode,
          };

          return JSON.stringify(data);
        };

        channel.assertExchange(exchange, "topic", {
          durable: false,
        });

        setInterval(() => {
          const msg = getFakeData();

          channel.publish(exchange, key, Buffer.from(msg));
          console.log(` [>] Sent: ${key}:'${msg}'`);
        }, 2000);
      });
    }
  );
};

exports.emit = emit;
