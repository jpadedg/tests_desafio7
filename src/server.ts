import express from "express";
import alunoRoute from "./module/aluno/aluno.route";

const app = express();
app.use(express.json());

app.use("/aluno", alunoRoute);

const server = app.listen(8080, () => {
  console.log("Server running!");
});

export default server;