import {Constructable, Container, Service} from "typedi";
import {Logger} from "../../infrastructure/logger/Logger";
import P from "pino";
import BaseLogger = P.BaseLogger;
import {PgDB} from "../../infrastructure/orm/PgDB";
import {Sequelize} from "sequelize-typescript";
import {LabelLocation} from "../models/LabelLocation";
import {Country} from "../models/Country";

@Service()
export class LabelLocationsRepository {
    constructor(
        @Logger() private logger: BaseLogger,
        @PgDB() private db: Sequelize
    ) {
    }

    async create(payload: {
        countryId: number,
        address: string,
        unitOrApt: string,
        city: string,
        state: string,
        zip: string,
    }) {
        //throw new Error('Custom exception');
        console.log('ll',payload);
        return await LabelLocation.create(payload)
    }
}
