import {Next, Request, Response} from "restify";
import {Logger} from "../../infrastructure/logger/Logger";
import {PinoLogger} from "../../infrastructure/logger/PinoLogger";
import P from "pino";
import BaseLogger = P.BaseLogger;
import {Service} from "typedi";
import {Label} from "../models/Label";
import {LabelLocation} from "../models/LabelLocation";
import {LabelsRepo, LabelsRepository} from "../../domain/repositories/LabelsRepository";

// function first() {
//     console.log("first(): factory evaluated");
//     return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//         console.log("first(): called");
//         console.log(target, propertyKey, descriptor);
//     };
// }
@Service()
export class LabelsController {
    constructor(
        @Logger() private logger: BaseLogger,
        @LabelsRepo() private repo: LabelsRepository
    ) {}

    async index(req: Request, res: Response, next: Next){
        const items = await Label.findAll({include: [LabelLocation]})
        res.json({
            data: items,
            status: "OK"
        });
        next()
    }

    async get(req: Request, res: Response, next: Next){
        const item = await Label.findOne({
            where: {
                id: req.params.id
            },
            include: [LabelLocation]
        })

        res.json({
            data: item,
            status: "OK"
        });
        next()
    }

    async create(req: Request, res: Response, next: Next){
        console.log('create');
        let result = await this.repo.create({name: req.params.name, locationId: req.params.locationId})

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
