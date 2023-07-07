import Sequelize from "sequelize";

// conexion a la base de datos

export const sequelize = new Sequelize("recetasdb", "postgres", "Cesarayala02", {
  host: "localhost",
  dialect: "postgres",
  logging: false
});