import {BaseEntity} from "../BaseEntity";
import LabelLocationsSchema from "../../../interfaces/schemas/LabelLocationsSchema";
import Joi from "joi";
import {LabelDto} from "./Label.dto";

export class LabelLocation extends BaseEntity{
    constructor(label: LabelDto) {
        super(label);
    }

    getObjectSchema(): Joi.ObjectSchema {
        return LabelLocationsSchema;
    }

}
