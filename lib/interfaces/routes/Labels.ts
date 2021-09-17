import {Server} from "restify";
import {LabelsController} from "../controllers/LabelsController";
import {loadDefaultRoutes} from "./helpers";

export default(server: Server) => {
    const prefix = '/labels'
    const controller = new LabelsController();

    loadDefaultRoutes(server, controller, prefix)
};
