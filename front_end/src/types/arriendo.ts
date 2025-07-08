import { date, number, object, string } from "valibot";

export const ArriendoMostrarSchema = object({
  id: number(),
  fechaInicio: date(),
  fechaFin: date(),
  patenteVehiculo: string(),
  rutCliente: string(),
  nombreCliente: string(),
});
