import Express from "express";

const server = Express();

server.use("/", (request, response) => {
  response.send("Hola Mundo Express");
});

export default server;
