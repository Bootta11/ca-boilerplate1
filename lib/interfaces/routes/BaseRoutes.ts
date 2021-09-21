import {Server} from "restify";

export abstract class BaseRoutes {
    abstract loadRoutes(server: Server)
}
