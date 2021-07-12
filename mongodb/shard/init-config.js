# docker-compose exec  config1 mongo --port 27019


rs.initiate(
      {
              _id: "configrs",
              configsvr: true,
              members: [
                        { _id : 0, host : "config1:27019" },
                        { _id : 1, host : "config2:27019" },
                        { _id : 2, host : "config3:27019" }
                      ]
            }
);

