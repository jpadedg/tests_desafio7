import request from 'supertest';
import app from '../../../server';
import { Aluno } from '../aluno.model';

type AlunoType = {
    nome: string;
    cpf: string;
  };

const alunoMock: AlunoType[] = [ 
    {
        "nome": 'João',
        "cpf": '14215877451'
    },
    {
        "nome": 'Emilie',
        "cpf": '28775872451'
    },
    {
        "nome": 'Alessandra',
        "cpf": '74586412380'
    }
]


describe("Int - Aluno Suite", () => {
  it("##GET /aluno", async () => {
    const response = await request(app).get("/aluno");
    expect(response.status).toBe(200);
  });

  it("##POST /aluno", async () => {
    const novoAluno = {
      nome: "Novo nome",
      cpf: "12345678910"
    };
    const response = await request(app).post("/aluno").send(novoAluno);

    expect(response.status).toBe(200);
  });
});