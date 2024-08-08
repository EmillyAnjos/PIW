import { DataSource } from "typeorm";
import { Usuario } from "./usuario";       // importa a classe usuário

export const AppDataSource = new DataSource({
  type: "sqlite",                                        // tipo de banco de dados
  database: "database.sqlite",                      // nome do arquivo do banco de dados
  synchronize: true,
  logging: false,
  entities: [Usuario],                                     // entidade que recebe as informações da classe usuário
  migrations: [],
  subscribers: [],
});