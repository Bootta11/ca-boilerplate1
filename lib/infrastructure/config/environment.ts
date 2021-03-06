import env from './dotenv-loader'
import database from './modules/database'
import server from "./modules/server";
import auth from "./modules/auth";
import log from "./modules/log";
import firebase from "./modules/firebase";

export default {
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

    /**
     * Firebase
     */
    firebase
}

