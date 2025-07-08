import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({ tableName: "arriendos" })
class Arriendo extends Model {
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  declare id: number;

  @Column({ type: DataType.DATE, allowNull: false, field: "fecha_inicio" })
  declare fechaInicio: Date;

  @Column({ type: DataType.DATE, allowNull: true, field: "fecha_fin" })
  declare fechaFin: Date;

  @Column({
    type: DataType.STRING(6),
    allowNull: false,
    field: "patente_vehiculo",
  })
  declare patenteVehiculo: string;

  @Column({
    type: DataType.ENUM("Sedán", "SUV", "Camioneta"),
    allowNull: false,
    field: "tipo_vehiculo",
  })
  declare tipoVehiculo: "Sedán" | "SUV" | "Camioneta";

  @Column({ type: DataType.STRING(10), allowNull: false, field: "rut_cliente" })
  declare rutCliente: string;

  @Column({
    type: DataType.STRING(50),
    allowNull: false,
    field: "nombre_cliente",
  })
  declare nombreCliente: string;
}

export default Arriendo;
