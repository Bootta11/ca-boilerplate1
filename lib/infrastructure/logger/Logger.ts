import {Constructable, Container} from "typedi";
import {PinoLogger} from "./PinoLogger";

export function Logger() {
    return (object: Constructable<any>, propertyName: string, index?: number) => {
        const pinoLogger = new PinoLogger();

        Container.registerHandler({object, propertyName, index, value: containerInstance => pinoLogger.logger });
    }
}
