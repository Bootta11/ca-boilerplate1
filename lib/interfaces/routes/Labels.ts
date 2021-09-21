import {Server} from "restify";
import {LabelsController} from "../controllers/LabelsController";
import {loadDefaultRoutes} from "./helpers";
import {Container} from "typedi";

export default(server: Server) => {
    const prefix = '/labels'
    const controller = Container.get(LabelsController);

    loadDefaultRoutes(server, controller, prefix)
};
