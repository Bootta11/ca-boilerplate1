import pino from 'pino';
import environment from "../config/environment";

function getTransportPath(transportName: string) {
    return environment.server.project_path + `/lib/infrastructure/logger/pino-transport/${transportName}.mjs`
}

const transports = pino.transport(
    {
        targets: [
            {
                level: environment.log.level,
                target: getTransportPath('console-log-transport'),
                options: {}
            },
            {
                level: environment.log.level,
                target: getTransportPath('file-transport'),
                options: {
                    destination: environment.log.logPath,
                    filename: environment.log.logFilename
                }
            }
        ]
    })

export default pino(transports);


