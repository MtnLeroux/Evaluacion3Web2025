import { Request, Response } from "express";
import Arriendo from "../models/Arriendo";
import { Sequelize } from "sequelize";

export const getArriendos = async (request: Request, response: Response) => {
  const arriendos = await Arriendo.findAll({
    order: [["fechaInicio", "ASC"]],
  });
  response.json({ data: arriendos });
};

export const crearArriendo = async (request: Request, response: Response) => {
  const arriendoNuevo = await Arriendo.create(request.body);
  response.json({ data: arriendoNuevo });
};

export const borrarArriendo = async (request: Request, response: Response) => {
  const { id } = request.params;
  const arriendo = await Arriendo.findByPk(id);
  await arriendo.destroy();
  response.json({ data: "Arriendo Eliminado" });
};

export const actualizaArriendo = async (
  request: Request,
  response: Response
) => {
  const { id } = request.params;
  const arriendo = await Arriendo.findByPk(id);
  await arriendo.update(request.body);
  await arriendo.save();
  response.json({ data: arriendo });
};

export const getMayorArriendo = async (
  request: Request,
  response: Response
) => {
  const arriendos = await Arriendo.findAll({
    attributes: [
      "id",
      "tipoVehiculo",
      [
        Sequelize.fn("COUNT", Sequelize.col("arriendos.tipoVehiculo")),
        "cantidadVehiculos",
      ],
    ],
    include: [
      {
        model: Arriendo,
        required: false,
        attributes: [],
      },
    ],
    group: ["tipoVehiculo.id"],
    order: [["tipoVehiculo", "ASC"]],
  });
  response.json({ data: arriendos });
};
