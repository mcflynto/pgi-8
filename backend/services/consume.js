const amqp = require("amqplib/callback_api");

const Store = require("../store/store");

const consume = async () => {
  return amqp.connect("amqp://localhost", (connectionError, connection) => {
    if (connectionError) {
      throw connectionError;
    }

    connection.createChannel((channelError, channel) => {
      if (channelError) {
        throw channelError;
      }

      const exchange = "data";
      const key = "live.input";

      channel.assertExchange(exchange, "topic", {
        durable: false,
      });

      channel.assertQueue(
        "",
        {
          exclusive: true,
        },
        (queueError, inputQueue) => {
          if (queueError) {
            throw queueError;
          }

          console.log(" [*] Waiting for input. To exit press CTRL+C");

          channel.bindQueue(inputQueue.queue, exchange, key);

          channel.consume(
            inputQueue.queue,
            (msg) => {
              const store = Store;

              switch (msg.content.toString()) {
                case "activateExtremeMode":
                  store.extremeMode = true;
                  console.log(
                    ` [<] Received: ${
                      msg.fields.routingKey
                    }: '${msg.content.toString()}' => Extreme Mode activated!`
                  );

                  break;

                case "deactivateExtremeMode":
                  store.extremeMode = false;
                  console.log(
                    ` [<] Received: ${
                      msg.fields.routingKey
                    }: '${msg.content.toString()}' => Extreme Mode deactivated!`
                  );

                  break;

                default:
                  console.log("Invalid command received, nothing changed.");
                  break;
              }
            },
            { noAck: true }
          );
        }
      );
    });
  });
};

exports.consume = consume;
