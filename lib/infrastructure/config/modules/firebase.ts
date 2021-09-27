import env from '../dotenv-loader'

export default JSON.parse(env.FIREBASE_JSON || '');
