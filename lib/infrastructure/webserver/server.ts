import restify from 'restify'
import errors from 'restify-errors'
import { Server } from 'restify'
import config from '../config/environment'
import pino from "../logger/pino";
import routes from '../../interfaces/routes';

export default class WebServer {
    server: Server
    defaultVersion: string
    port: number

    constructor() {
        this.defaultVersion = config.server.defaultVersion
        this.port = config.server.port
        this.server = restify.createServer()

        routes(this.server)

        this.server.use((req, res, next) => {
            req.pino = pino
            next()
        })

        this.server.get('/', function(req, res, next) {
            res.send("Health check")
            return next()
        })
    }

    start = async (): Promise<void> => {
        this.server.listen(this.port, function() {
            console.log(`Server is up on ${config.server.port}`)
        });
    }
}
