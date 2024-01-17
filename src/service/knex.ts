import { Knex } from "knex";
import knexConfig from "../config/knex";

let conn: Knex | undefined;

function conectar(): Knex {
  if (conn) return conn;

  conn = Knex(knexConfig) as Knex;
  return conn;
}

export default conectar();