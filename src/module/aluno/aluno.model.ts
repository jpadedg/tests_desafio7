import Knex from "knex";
import knexConfig from "../../config/knex";

const connection = Knex(knexConfig);

export interface Aluno {
  id: number;
  nome: string;
  cpf: string;
}

const getAll = async (): Promise<Aluno[]> => {
  return connection<Aluno>("aluno").select();
};

const store = async (params: Partial<Aluno>): Promise<number[]> => {
  return connection<Aluno>("aluno").insert(params);
};

export { getAll, store };