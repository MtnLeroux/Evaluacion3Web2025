import { Router } from "express";
import {
  borrarArriendo,
  crearArriendo,
  getArriendos,
  getMayorArriendo,
} from "./handlers/arriendos";

const router = Router();

router.get("/arriendos", getArriendos);
router.post("/arriendos/", crearArriendo);
router.delete("/arriendos:id", borrarArriendo);
router.get("/arriendos/mayor-arriendo", getMayorArriendo);

export default router;
