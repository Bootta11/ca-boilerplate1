import {Sequelize} from 'sequelize-typescript'
import env from "../config/environment";

const dbConfig = env.database.sequelize[env.server.node_env]

export class PgDatabase {
    private database: Sequelize

    constructor() {
        console.log('PGDB', env, dbConfig);
        this.database = new Sequelize({
            database: dbConfig.database,
            dialect: dbConfig.dialect,
            username: dbConfig.username,
            password: dbConfig.password,
            host: dbConfig.host,
            port: dbConfig.port,
            models: [__dirname + '/../../domain/models']
        })
    }

    getDatabase() {
        return this.database
    }
}
