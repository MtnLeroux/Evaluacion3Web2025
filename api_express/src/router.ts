import { Router } from "express";
import {
  borrarArriendo,
  crearArriendo,
  getArriendos,
  getMayorArriendo,
} from "./handlers/arriendos";
import { crearUsuario, login } from "./handlers/usuarios";
import { verificarToken } from "./middleware/verificarToken";

const router = Router();

router.post("/login", login);
router.post("/usuarios", crearUsuario);

router.use(verificarToken);

router.get("/arriendos", getArriendos);
router.post("/arriendos/", crearArriendo);
router.delete("/arriendos:id", borrarArriendo);
router.get("/arriendos/mayor-arriendo", getMayorArriendo);

export default router;
