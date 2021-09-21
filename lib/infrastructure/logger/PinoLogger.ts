import pino from 'pino'
import environment from "../config/environment"
import P from "pino";
import BaseLogger = P.BaseLogger;

export class PinoLogger {
    public logger: BaseLogger;

    constructor() {

        const transports = pino.transport(
            {
                targets: [
                    {
                        level: 'debug', //environment.log.level,
                        target: this.getTransportPath('console-log-transport'),
                        options: {useLevelLabels: true},
                    },
                    {
                        level: 'debug',// environment.log.level,
                        target: this.getTransportPath('file-transport'),
                        options: {
                            destination: environment.log.logPath,
                            filename: environment.log.logFilename,
                            timestamp: false,

                        }
                    }
                ]
            })

        this.logger = pino({
            formatters: {
                level(label, number) {
                    return {level: number, levelLabel: label}
                }
            },
            timestamp: () => {
                const dateNow = Date.now()
                const timestamp = new Date(dateNow).toISOString()
                return `,"time":"${dateNow}","timestamp":"${timestamp}"`
            }
        }, transports)
    }

    private getTransportPath(transportName: string) {
        return environment.server.project_path + `/lib/infrastructure/logger/pino-transport/${transportName}.mjs`
    }
}
