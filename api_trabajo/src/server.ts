import Express from "express";
import router from "./router";
import DB from "./config/database";
import cors, { CorsOptions } from "cors";

const server = Express();

async function conectarBD() {
  try {
    await DB.authenticate();
    DB.sync();
    console.log("Conexion a BD exitosa");
  } catch (error) {
    console.log("No se pudo conectar a la BD");
    console.log(error);
  }
}

conectarBD();

const corsOptions: CorsOptions = {
  origin: function (origin, callback) {
    if (origin === process.env.FRONTEND_URL) {
      callback(null, true);
    } else {
      callback(new Error("Error CORS"), false);
    }
  },
};

server.use(cors(corsOptions));

server.use(Express.json());

server.use("/api", router);

export default server;
