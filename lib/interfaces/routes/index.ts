import Labels from './Labels';
import {Server} from "restify";

export default function(server: Server) {
    Labels(server);
};
