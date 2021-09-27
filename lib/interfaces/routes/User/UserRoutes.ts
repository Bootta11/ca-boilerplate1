import {Server} from "restify"
import RoutesHelper from "../RoutesHelper";
import {Service} from "typedi"
import {BaseRoutes} from "../BaseRoutes";
import {UsersController} from "../../controllers/UsersController";

@Service()
export default class UserRoutes extends BaseRoutes{
    constructor(
        private routesHelper: RoutesHelper,
        private controller: UsersController
    ) {
        super();
    }

    loadRoutes(server: Server) {
        const prefix = '/users'

        this.routesHelper.loadDefaultRoutes(server, this.controller, prefix)

        server.post(`${prefix}/login`, this.routesHelper.catchErrors(this.controller.login.bind(this.controller)))
    }
}
