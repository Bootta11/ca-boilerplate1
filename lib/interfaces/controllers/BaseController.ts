import {ObjectSchema} from "joi";
import LabelLocationsSchema from "../schemas/LabelLocationsSchema";

export abstract class BaseController {
    abstract getDefaultValidationSchema(): ObjectSchema

    validatePayload(res, rawData, validationSchema = undefined){
        const schema = validationSchema !== undefined ? validationSchema : this.getDefaultValidationSchema()
        const {error, value: validatedData} = schema.validate(rawData)

        if(error) return res.json({error: error.message, status: 'nok'})

        return validatedData
    }
}
