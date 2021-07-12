# docker-compose exec s1r1 mongo --port 27018

rs.initiate(
      {
              _id: "s1",
              members: [
                        { _id : 0, host : "s1r1:27018" },
                        { _id : 1, host : "s1r2:27018" },
                        { _id : 2, host : "s1r3:27018" }
                      ]
            }
)
