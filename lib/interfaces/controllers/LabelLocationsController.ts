import {Next, Request, Response} from "restify";
import {Logger} from "../../infrastructure/logger/Logger";
import {PinoLogger} from "../../infrastructure/logger/PinoLogger";
import P from "pino";
import BaseLogger = P.BaseLogger;
import {Service} from "typedi";
import {Label} from "../models/Label";
import {LabelLocation} from "../models/LabelLocation";
import {Country} from "../models/Country";
import {LabelsRepo, LabelsRepository} from "../../domain/repositories/LabelsRepository";
import {LabelLocationsRepo, LabelLocationsRepository} from "../../domain/repositories/LabelLocationsRepository";

@Service()
export class LabelLocationsController {
    constructor(
        @Logger() private logger: BaseLogger,
        @LabelLocationsRepo() private repo: LabelLocationsRepository
    ) {}

    async index(req: Request, res: Response, next: Next){
        console.log('lblloc ctrl ind');
        const items = await LabelLocation.findAll({include: [Country]})
        res.json({
            data: items,
            status: "OK"
        });
        next()
    }

    async get(req: Request, res: Response, next: Next){
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

    async create(req: Request, res: Response, next: Next){
        console.log('lblloc ctrl');
        let result = await this.repo.create({
            countryId: req.params.countryId,
            address: req.params.address,
            unitOrApt: req.params.unitOrApt,
            city: req.params.city,
            state: req.params.state,
            zip: req.params.zip,
        })

        res.json({
            data: result,
            status: "OK"
        });
        next()
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
}
