import "dotenv/config";
import "reflect-metadata";
import path from "path";
import { DataSource } from "typeorm";

const AppDataSource = new DataSource(
  process.env.NODE_ENV === "test" ?
    {
      type: "sqlite",
      database: ":memory:",
      synchronize: true,
      entities: ["src/entities/*.ts"]
    } :
    {
      type: "postgres",
      url: process.env.DATABASE_URL,
      logging: true,
      synchronize: false,
      entities: [path.join(__dirname, "./entities/**.{js,ts}")],
      migrations: [path.join(__dirname, "./migrations/**.{js,ts}")]
    }
)

export default AppDataSource