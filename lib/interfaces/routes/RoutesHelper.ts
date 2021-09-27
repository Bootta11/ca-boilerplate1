import {Server} from "restify";
import restifyErrors from 'restify-errors'
import {Service} from "typedi";
import P from "pino";
import BaseLogger = P.BaseLogger;
import {Logger} from "../../infrastructure/logger/Logger";
import {RouteErrors} from "./RouteErrors";

@Service()
export default class RoutesHelper {
    constructor(
        @Logger() private logger: BaseLogger,
        private routeErrors: RouteErrors
    ) {
    }

    loadDefaultRoutes(server: Server, controller: any, prefix: string) {

        const route_to_method_mapping = [
            {path: `${prefix}`, controllerMethod: 'index', httpMethod: 'get'},
            {path: `${prefix}/:id`, controllerMethod: 'get', httpMethod: 'get'},
            {path: `${prefix}`, controllerMethod: 'create', httpMethod: 'post'},
            {path: `${prefix}/:id`, controllerMethod: 'update', httpMethod: 'post'},
            {path: `${prefix}/:id/delete`, controllerMethod: 'delete', httpMethod: 'get'},
        ]

        for (let route of route_to_method_mapping) {
            if (controller[route.controllerMethod]) {
                // @ts-ignore
                server[route.httpMethod](route.path, this.catchErrors(controller[route.controllerMethod].bind(controller)))
            } else {
                this.logger.warn({msg: "Controller method not defined for route", route: route})
            }
        }
    }

    catchErrors(callback) {
        const ctrlThis = this;
        return async function errorHandler(req, res, next) {
            try {
                await callback(req, res, next)
            } catch (err) {
                console.log('Err: ', err)
                return ctrlThis.routeErrors.errorResponse(res, err)
                // if (!(err instanceof restifyErrors.HttpError))
                //     err = new restifyErrors.InternalServerError(err)
                // next(err)
            }
        }
    }
}
