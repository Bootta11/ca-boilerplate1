import {Server} from "restify";
import log from "../../infrastructure/logger/pino";


export let loadDefaultRoutes = (server: Server, controller: any, prefix: string) => {
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
            server[route.httpMethod](route.path, controller[route.controllerMethod])
        }else{
            log.warn({msg: "Controler method not defined for route", route: route})
        }
    }

    return '';
}
