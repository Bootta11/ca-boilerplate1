import {Next, Request, Response} from "restify";
import {Logger} from "../../infrastructure/logger/Logger";
import {PinoLogger} from "../../infrastructure/logger/PinoLogger";
import P from "pino";
import BaseLogger = P.BaseLogger;
import {Service} from "typedi";
import {Label} from "../../domain/models/Label";
import {LabelLocation} from "../../domain/models/LabelLocation";
import {Country} from "../../domain/models/Country";
import {LabelLocationsRepository} from "../../domain/repositories/LabelLocationsRepository";
import LabelsSchema from "../schemas/LabelsSchema";
import LabelLocationsSchema from "../schemas/LabelLocationsSchema";
import ErrnoException = NodeJS.ErrnoException;
import {BaseController} from "./BaseController";
import {ObjectSchema} from "joi";

@Service()
export class LabelLocationsController extends BaseController {

    constructor(
        @Logger() private logger: BaseLogger,
        private repo: LabelLocationsRepository
    ) {
        super()
    }

    getDefaultValidationSchema(): ObjectSchema<any> {
        return LabelLocationsSchema;
    }

    async index(req: Request, res: Response, next: Next) {
        console.log('lblloc ctrl ind');
        const items = await LabelLocation.findAll({include: [Country]})
        res.json({
            data: items,
            status: "OK"
        });
        next()
    }

    async get(req: Request, res: Response, next: Next) {
        console.log('lblloc ctrl get');
        const item = await LabelLocation.findOne({
            where: {
                id: req.params.id
            },
            include: [Country]
        })

        res.json({
            data: item,
            status: "OK"
        });
        next()
    }

    async create(req: Request, res: Response, next: Next) {
        let rawData = {
            countryId: req.params.countryId,
            address: req.params.address,
            unitOrApt: req.params.unitOrApt,
            city: req.params.city,
            state: req.params.state,
            zip: req.params.zip,
        };

        console.log('before validation')

        let result = await this.repo.create(this.validatePayload(res, rawData))

        return res.json({
            data: result,
            status: "OK"
        });

    }

    async update(req: Request, res: Response, next: Next) {
        console.log('update method');
        res.json({
            api: 'update',
            status: "OK"
        });
        next()
    }

    async delete(req: Request, res: Response, next: Next) {
        console.log('delete method');
        res.json({
            api: 'delete',
            status: "OK"
        });
        next()
    }
}
