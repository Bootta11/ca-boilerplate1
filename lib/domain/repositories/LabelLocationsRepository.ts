import {Constructable, Container, Service} from "typedi";
import {Logger} from "../../infrastructure/logger/Logger";
import P from "pino";
import BaseLogger = P.BaseLogger;
import {PgDB} from "../../infrastructure/orm/PgDB";
import {Sequelize} from "sequelize-typescript";
import {LabelLocation} from "../../interfaces/models/LabelLocation";
import {Country} from "../../interfaces/models/Country";

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
        console.log('ll',payload);
        return await LabelLocation.findOrCreate({
            where: payload,
            include: [Country]
        })
    }
}

export function LabelLocationsRepo() {
    return (object: Constructable<any>, propertyName: string, index?: number) => {
        const item = Container.get(LabelLocationsRepository);

        Container.registerHandler({object, propertyName, index, value: containerInstance => item});
    }
}
