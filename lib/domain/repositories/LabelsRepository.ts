import {Constructable, Container, Service} from "typedi";
import {Logger} from "../../infrastructure/logger/Logger";
import P from "pino";
import BaseLogger = P.BaseLogger;
import {PgDB} from "../../infrastructure/orm/PgDB";
import {Sequelize} from "sequelize-typescript";
import {Label} from "../models/Label";
import {LabelLocation} from "../models/LabelLocation";

@Service()
export class LabelsRepository {
    constructor(
        @Logger() private logger: BaseLogger,
        @PgDB() private db: Sequelize
    ) {}

    async create(payload: {name: string, locationId: number}){
        console.log('create start', payload);

        return await Label.create(payload)
    }
}
