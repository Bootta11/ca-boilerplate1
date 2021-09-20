import {LabelDto} from "./Label.dto";
import {BaseEntity} from "../BaseEntity";
import LabelsSchema from "../../../interfaces/schemas/LabelsSchema";
import Joi from "joi";

export class Label extends BaseEntity{
    constructor(label: LabelDto) {
        super(label);
    }

    getObjectSchema(): Joi.ObjectSchema {
        return LabelsSchema;
    }
}
