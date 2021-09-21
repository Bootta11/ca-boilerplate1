import {createServer, plugins} from 'restify'
import { Server } from 'restify'
import config from '../config/environment'
import routes from '../../interfaces/routes'
import {Logger} from "../logger/Logger";
import P from "pino";
import BaseLogger = P.BaseLogger;
import {Service} from "typedi";
import {PgDB} from "../orm/PgDB";
import {Sequelize} from "sequelize";
import bodyParser = plugins.bodyParser;

@Service()
export default class WebServer {
    server: Server
    defaultVersion: string
    port: number

    constructor(@Logger() private logger: BaseLogger, @PgDB() private db: Sequelize) {
        this.defaultVersion = config.server.defaultVersion
        this.port = config.server.port
        this.server = createServer()
        this.server.use(bodyParser({ mapParams: true }));

        this.initializeRoutes()
    }

    initializeRoutes(){
        routes(this.server)

        this.server.get('/', async function(req, res, next) {
            res.json({status: 'ok'})
            return next()
        })
    }

    start = async (): Promise<void> => {
        this.server.listen(this.port, function() {
            console.log(`Server is up on ${config.server.port}`)
        });
    }
}
