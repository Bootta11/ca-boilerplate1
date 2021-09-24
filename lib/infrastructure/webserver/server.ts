import {createServer, plugins} from 'restify'
import {Server} from 'restify'
import config from '../config/environment'
import RoutesIndex from "../../interfaces/routes/RoutesIndex";
import {Logger} from "../logger/Logger";
import P from "pino";
import BaseLogger = P.BaseLogger;
import {Service} from "typedi";
import {PgDB} from "../orm/PgDB";
import {Sequelize} from "sequelize";
import bodyParser = plugins.bodyParser;
import internal from "stream";
import RoutesHelper from "../../interfaces/routes/RoutesHelper";

@Service()
export default class WebServer {
    server: Server
    defaultVersion: string
    port: number

    constructor(
        @Logger() private logger: BaseLogger,
        @PgDB() private db: Sequelize,
        private routesIndex: RoutesIndex
    ) {
        this.defaultVersion = config.server.defaultVersion
        this.port = config.server.port
        this.server = createServer()
        this.server.use(bodyParser({mapParams: true}));

        this.server.on('uncaughtException', (err) => {
            console.log('UNCAUGHT EXCEPTION', err);
        })

        this.server.on('InternalServer', function (req, res, err, cb) {
            // this event is fired first. you can annotate errors here by saying
            // err.handled = true, because we must ALWAYS fire the generic handler after.
            console.log("INTERNALERROR:", err, 'Stack: ', err.stack);
            err.handled = true;
            return cb();
        });

// generic error handler
        this.server.on('restifyError', function (req, res, err, cb) {
            // this event is fired last. do some generic metrics/logging
            if (!err.handled) {
                // do something
                console.log('RESTIFY_ERROR', err);
            }
            return cb();
        });

        this.initializeRoutes()
    }

    initializeRoutes() {
        this.routesIndex.loadRoutes(this.server)

        this.server.get('/', async function (req, res, next) {
            res.json({status: 'ok'})
            return next()
        })
    }

    async start(): Promise<void> {
        this.server.listen(this.port, function () {
            console.log(`Server is up on ${config.server.port}`)
        });
    }

    async stop(): Promise<any> {
        return this.server.close()
    }
}
