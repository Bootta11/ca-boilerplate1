import env from '../dotenv-loader'

export default {
    level: env.LOG_LEVEL || 'trace',
    logPath: env.LOG_PATH || (__dirname + '/../../../../var/logs'),
    logFilename: env.LOG_FILENAME || 'mogul',
}
