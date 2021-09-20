import 'reflect-metadata';
import WebServer from "./lib/infrastructure/webserver/server"
import {Container, Service} from "typedi";
import {PinoLogger} from "./lib/infrastructure/logger/PinoLogger";
import {Logger} from "./lib/infrastructure/logger/Logger";
import P from "pino";
import BaseLogger = P.BaseLogger;

// const start = async () => {
//     try {
//         const server = Container.get(WebServer)
//         await server.start()
//     } catch (err) {
//         PinoLogger
//     }
// }

@Service()
class App {
    constructor(@Logger() private logger: BaseLogger) {
    }

    async start(){
        try {
            const server = Container.get(WebServer)
            //throw new Error("Custom error created")
            await server.start()
        } catch (err) {
            console.log(err);
            this.logger.error(err)
        }
    }
}

Container.get(App)
    .start()
    .then(r => {
        console.log('Start finished');
    })
    .catch(err => {
        console.log(err)
    })


