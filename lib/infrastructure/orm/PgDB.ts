import {Constructable, Container} from "typedi";
import {PgDatabase} from "./PgDatabase";

export function PgDB() {
    return (object: Constructable<any>, propertyName: string, index?: number) => {
        const pgDatabase = new PgDatabase();

        Container.registerHandler({object, propertyName, index, value: containerInstance => pgDatabase.getDatabase() });
    }
}
