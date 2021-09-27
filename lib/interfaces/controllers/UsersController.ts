import {Next, Request, Response} from "restify";
import {Logger} from "../../infrastructure/logger/Logger";
import {PinoLogger} from "../../infrastructure/logger/PinoLogger";
import P from "pino";
import BaseLogger = P.BaseLogger;
import {Service} from "typedi";
import {Label} from "../../domain/models/Label";
import {LabelLocation} from "../../domain/models/LabelLocation";
import {LabelsRepository} from "../../domain/repositories/LabelsRepository";
import LabelsSchema from "../schemas/LabelsSchema";
import {UsersRepository} from "../../domain/repositories/UsersRepository";
import UsersSchema from "../schemas/User/UsersSchema";
import to from "await-to-js";
import {BaseController} from "./BaseController";
import {ObjectSchema} from "joi";

@Service()
export class UsersController extends  BaseController{
    constructor(
        @Logger() private logger: BaseLogger,
        private repo: UsersRepository
    ) {
        super()
    }

    getDefaultValidationSchema(): ObjectSchema {
        return UsersSchema
    }

    async index(req: Request, res: Response, next: Next){
        const items = await this.repo.getAll()
        res.json({
            data: items,
            status: "OK"
        });
        next()
    }

    async get(req: Request, res: Response, next: Next){
        const item = await this.repo.get(req.params.id)

        res.json({
            data: item,
            status: "OK"
        });
        next()
    }

    async create(req: Request, res: Response, next: Next){
        let rawData = {
            name: req.params.name,
            lastname: req.params.lastname,
            email: req.params.email,
            password: req.params.password,
        };

        let result = await this.repo.create(this.validatePayload(res, rawData))

        return res.json({
            data: result,
            status: "OK"
        });
    }

    async update(req: Request, res: Response, next: Next){
        console.log('update method');
        res.json({
            api: 'update',
            status: "OK"
        });
        next()
    }

    async delete(req: Request, res: Response, next: Next){
        console.log('delete method');
        res.json({
            api: 'delete',
            status: "OK"
        });
        next()
    }

    async login(req: Request, res: Response, next: Next) {
        const rawData = {
            email: req.params.email,
            password: req.params.password,
        }
        const {error, value: validatedData} = UsersSchema.validate(rawData)

        let result = await this.repo.login(validatedData)

        res.json({
            data: result,
            status: "OK"
        });
        next()
    }
}
