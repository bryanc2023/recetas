import Sequelize from "sequelize";

// conexion a la base de datos

export const sequelize = new Sequelize("recetasdb", "postgres", "12345678", {
  host: "localhost",
  logging: false,
  dialect: "postgres",
});