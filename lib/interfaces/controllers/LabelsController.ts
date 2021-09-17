import {Next, Request, Response} from "restify";

function first() {
    console.log("first(): factory evaluated");
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("first(): called");
        console.log(target, propertyKey, descriptor);
    };
}

export class LabelsController {
    @first()
    index(req: Request, res: Response, next: Next){
        res.json({
            api: 'index',
            status: "OK"
        });
        next()
    }

    get(req: Request, res: Response, next: Next){
        res.json({
            api: 'get',
            status: "OK"
        });
        next()
    }

    create(req: Request, res: Response, next: Next){
        res.json({
            api: 'create',
            status: "OK"
        });
        next()
    }

    update(req: Request, res: Response, next: Next){
        console.log('update method');
        res.json({
            api: 'update',
            status: "OK"
        });
        next()
    }

    delete(req: Request, res: Response, next: Next){
        console.log('delete method');
        res.json({
            api: 'delete',
            status: "OK"
        });
        next()
    }
}
