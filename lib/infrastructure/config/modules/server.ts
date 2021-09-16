import env from '../dotenv-loader'

export default {
    port: parseInt(<string>env.PORT, 10) || 8080,
    defaultVersion: env.API_VERSION || "1.0.0",
}
