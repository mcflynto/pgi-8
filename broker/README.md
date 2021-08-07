# for RabbitMQ 3.9, the latest series

docker build -t broker .

docker run -it --rm --name broker -p 5672:5672 -p 15672:15672 -p 15674:15674 broker
