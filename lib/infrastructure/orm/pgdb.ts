import {Sequelize} from "sequelize";
import env from "../config/environment";

const dbConfig = env.database.sequelize[env.server.node_env]

const pgdb = new Sequelize(
    dbConfig.database,
    dbConfig.username,
    dbConfig.password,
    {
        host: dbConfig.host,
        dialect: dbConfig.dialect,
    },
);

export default pgdb;
