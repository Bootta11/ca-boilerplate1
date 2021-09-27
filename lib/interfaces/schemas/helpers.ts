import Joi from "joi";

export let requiredAndMinLength = function (type: string, fieldName: string, minLength: number){
    return Joi[type]()
        .min(minLength)
        .required()
}
