import { config } from "dotenv";
import { Sequelize } from "sequelize";


config();

export const sequelize = new Sequelize(
  // yesley ensure garauxa ki TS lai that the value is not undefined
  process.env.DB_NAME!,
  process.env.DB_USER!,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
    port: Number(process.env.DB_PORT),
  },
);


