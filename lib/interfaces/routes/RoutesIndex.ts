import {Server} from "restify";
import LabelRoutes from "./LabelRoutes";
import LabelLocationsRoutes from "./LabelLocationsRoutes";
import {Service} from "typedi";

@Service()
export default class RoutesIndex {
    constructor(
        private labelRoutes: LabelRoutes,
        private labelLocationRoutes: LabelLocationsRoutes
    ) {}

    loadRoutes(server: Server){
        this.labelRoutes.loadRoutes(server)
        this.labelLocationRoutes.loadRoutes(server)
    }
}
