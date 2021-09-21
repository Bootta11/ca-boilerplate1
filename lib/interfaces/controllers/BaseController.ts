import {ObjectSchema} from "joi";

export abstract class BaseController {
    abstract getValidationSchema(): ObjectSchema
}
