import Sequelize from "sequelize";

// conexion a la base de datos

export const sequelize = new Sequelize("recetasdb", "postgres", "sistemas123", {
  host: "localhost",
  logging: false,
  dialect: "postgres",
  logging: false
});


