import {Server} from "restify";
import RoutesHelper from "./RoutesHelper";
import {Service} from "typedi";
import {LabelLocationsController} from "../controllers/LabelLocationsController";
import {BaseRoutes} from "./BaseRoutes";

@Service()
export default class LabelLocationsRoutes extends BaseRoutes{
    constructor(
        private routesHelper: RoutesHelper,
        private controller: LabelLocationsController
    ) {
        super();
    }
    loadRoutes(server: Server) {
        const prefix = '/label_locations'

        this.routesHelper.loadDefaultRoutes(server, this.controller, prefix)
    }
}
