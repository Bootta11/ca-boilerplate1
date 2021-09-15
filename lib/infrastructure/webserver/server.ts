import restify from 'restify'
import { Server } from 'restify'
import config from '../config/environment'

export default class WebServer {
    server: Server
    defaultVersion: string
    port: number

    constructor() {
        this.defaultVersion = config.defaultVersion
        this.port = config.port
        this.server = restify.createServer()

        this.server.get('/', function(req, res, next) {
            res.send("Health check")
            return next()
        })
    }

    start = async () => {
        this.server.listen(this.port, function() {
            console.log(`Server is up on ${config.port}`)
        });
    }
}