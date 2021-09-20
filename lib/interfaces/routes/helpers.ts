import {Server} from "restify";
import {Logger} from "../../infrastructure/logger/Logger";
import {PinoLogger} from "../../infrastructure/logger/PinoLogger";


export let loadDefaultRoutes = (server: Server, controller: any, prefix: string) => {
    const log = (new PinoLogger()).logger;
    const route_to_method_mapping = [
        {path: `${prefix}`, controllerMethod: 'index', httpMethod: 'get'},
        {path: `${prefix}/:id`, controllerMethod: 'get', httpMethod: 'get'},
        {path: `${prefix}`, controllerMethod: 'create', httpMethod: 'post'},
        {path: `${prefix}/:id`, controllerMethod: 'update', httpMethod: 'post'},
        {path: `${prefix}/:id/delete`, controllerMethod: 'delete', httpMethod: 'get'},
    ]

    for(let route of route_to_method_mapping){
        if(controller[route.controllerMethod]){
            // @ts-ignore
            server[route.httpMethod](route.path, controller[route.controllerMethod].bind(controller))
        }else{
            log.warn({msg: "Controler method not defined for route", route: route})
        }
    }

    return '';
}
