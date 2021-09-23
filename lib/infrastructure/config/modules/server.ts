import env from '../dotenv-loader'

export default {
    port: parseInt(<string>env.APP_PORT, 10) || 8080,
    defaultVersion: env.API_VERSION || "1.0.0",
    node_env: env.NODE_ENV,
    project_path: env.PROJECT_PATH || env.INIT_CWD || env.PWD || "",
}
