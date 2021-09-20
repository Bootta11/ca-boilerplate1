import {Server} from "restify";
import {loadDefaultRoutes} from "./helpers";
import {Container} from "typedi";
import {LabelLocationsController} from "../controllers/LabelLocationsController";

export default(server: Server) => {
    const prefix = '/label_locations'
    const controller = Container.get(LabelLocationsController);

    loadDefaultRoutes(server, controller, prefix)
};
