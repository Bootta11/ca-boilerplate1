import {Server} from "restify";
import Labels from './Labels';
import LabelLocations from "./LabelLocations";

export default function(server: Server) {
    Labels(server);
    LabelLocations(server);
};
