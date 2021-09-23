import {Server} from "restify"
import {LabelsController} from "../controllers/LabelsController"
import RoutesHelper from "./RoutesHelper";
import {Service} from "typedi"
import {BaseRoutes} from "./BaseRoutes";

@Service()
export default class LabelRoutes extends BaseRoutes{
    constructor(
        private routesHelper: RoutesHelper,
        private controller: LabelsController
    ) {
        super();
    }
    loadRoutes(server: Server) {
        const prefix = '/labels'

        this.routesHelper.loadDefaultRoutes(server, this.controller, prefix)
    }
}
