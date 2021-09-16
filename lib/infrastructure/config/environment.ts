import env from './dotenv-loader'
import database from './modules/database'
import server from "./modules/server";
import auth from "./modules/auth";
import log from "./modules/log";

export default {
    node_env: env.NODE_ENV,
    /**
     * Server
     */
    server,

    /**
     * Database
     */
    database,

    /**
     * Auth
     */
    auth,

    /**
     * Log
     */
    log,
}

