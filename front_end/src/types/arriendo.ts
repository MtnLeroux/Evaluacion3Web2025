import { array, date, number, object, string, type InferOutput } from "valibot";

export const ArriendoMostrarSchema = object({
  id: number(),
  fechaInicio: date(),
  fechaFin: date(),
  patenteVehiculo: string(),
  rutCliente: string(),
  nombreCliente: string(),
});

export const ArriendosMostrarSchema = array(ArriendoMostrarSchema);

export type ArriendoMostrar = InferOutput<typeof ArriendoMostrarSchema>;
