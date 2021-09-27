import {Service} from "typedi";
import {Logger} from "../../infrastructure/logger/Logger";
import P from "pino";
import BaseLogger = P.BaseLogger;
import {PgDB} from "../../infrastructure/orm/PgDB";
import {Sequelize} from "sequelize-typescript";
import {User} from "../models/User";
import environment from "../../infrastructure/config/environment";
import {initializeApp} from "firebase/app";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendEmailVerification
} from "firebase/auth";
import to from "await-to-js";

@Service()
export class UsersRepository {
    private fbApp
    private fbAuth

    constructor(
        @Logger() private logger: BaseLogger,
        @PgDB() private db: Sequelize
    ) {
        console.log(JSON.stringify(environment.firebase))
        this.fbApp = initializeApp(environment.firebase)
        this.fbAuth = getAuth()
    }

    async create(payload: {
        name: string,
        lastname: string,
        email: string,
        password: string,
    }) {
        console.log('create start', payload);
        let err, fbUser

        [err, fbUser] = await to(createUserWithEmailAndPassword(getAuth(), payload.email, payload.password))

        if (err === undefined) {
            sendEmailVerification(fbUser)
        }else{
            throw err
        }
console.log(err, err.code)
        if (err && err.code !== 'auth/email-already-in-use') {
            this.logger.error(err)
            throw Error('Unable to create user')
        }

        return await User.create(payload)
    }

    async login(payload: {
        email: string,
        password: string
    }) {
        let [err, userCred] = await to(signInWithEmailAndPassword(this.fbAuth, payload.email, payload.password))

        if (err) {
            throw err
        }

        return userCred?.user.getIdToken()
    }

    async getAll() {
        return User.findAll();
    }

    async get(id: string | number) {
        await User.findOne({
            where: {
                id
            }
        })
    }
}
