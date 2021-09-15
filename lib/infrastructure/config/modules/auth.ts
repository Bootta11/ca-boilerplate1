import env from '../dotenv-loader'

export default {
    jwtSecret: env.JWT_SECRET,
    jwtAlgorithm: env.JWT_ALGO,
}
