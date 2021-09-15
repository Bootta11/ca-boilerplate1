import restify from 'restify'
import { Server } from 'restify'

export default class WebServer {
    server: Server
    defaultVersion: string
    port: number

    constructor() {
        this.defaultVersion = "1.0.0" //extract into env variable
        this.port = 8080 //extract into env variable
        this.server = restify.createServer()

        this.server.get('/', function(req, res, next) {
            res.send("Health check")
            return next()
        })
    }

    start = async () => {
        this.server.listen(this.port, function() {
            console.log(`Server is up...`)
        });
    }
}