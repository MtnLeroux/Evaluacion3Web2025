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

// const corsOptions: CorsOptions = {
//   origin: function (origin, callback) {
//     if (origin === process.env.FRONTEND_URL) {
//       callback(null, true);
//     } else {
//       callback(new Error("Error CORS"), false);
//     }
//   },
// };

const corsOptions: CorsOptions = {
  origin: function (origin, callback) {
    // 1) Permite peticiones sin cabecera Origin (Postman, cURL, etc.)
    if (!origin) {
      return callback(null, true);
    }
    // 2) Permite sólo tu frontend en producción
    if (origin === process.env.FRONTEND_URL) {
      return callback(null, true);
    }
    // 3) Cualquier otro origen se rechaza
    callback(new Error("Error CORS"));
  },
  optionsSuccessStatus: 200,
};

// Habilita CORS para todas las rutas y el preflight
// server.use(cors(corsOptions));
// server.options("", cors(corsOptions));

server.use(cors(corsOptions));

server.use(Express.json());

server.use("/api", router);

export default server;
