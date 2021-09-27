import {Server} from "restify";
import LabelRoutes from "./LabelRoutes";
import LabelLocationsRoutes from "./LabelLocationsRoutes";
import {Service} from "typedi";
import UserRoutes from "./User/UserRoutes";
import {RouteErrors} from "./RouteErrors";

@Service()
export default class RoutesIndex {
    constructor(
        private labelRoutes: LabelRoutes,
        private userRoutes: UserRoutes,
        private labelLocationRoutes: LabelLocationsRoutes
    ) {}

    loadRoutes(server: Server){
        this.labelRoutes.loadRoutes(server)
        this.labelLocationRoutes.loadRoutes(server)
        this.userRoutes.loadRoutes(server)
    }
}
