import dotenv from 'dotenv'

process.env.NODE_ENV = process.env.NODE_ENV || 'development'

dotenv.config()

export default {
    /**  
     * Server
    */
    port: parseInt(<string>process.env.PORT, 10) || 8080,
    defaultVersion: process.env.API_VERSION || "1.0.0", 

    /**
     * Database 
     */
    databaseUrl: process.env.POSTGRES_URL,

    /**
     * JWT
     */
    jwtSecret: process.env.JWT_SECRET,
    jwtAlgorithm: process.env.JWT_ALGO,

    /**
     * Log 
     */
    logs: {
        level: process.env.LOG_LEVEL
    }
}

