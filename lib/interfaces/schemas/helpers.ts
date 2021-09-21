import Joi from "joi";

export let requiredAndMinLength = function (type: string, fieldName: string, minLength: number){
    return Joi[type].min(minLength).required()
        .messages({
            'string.min': `${fieldName} min length is 2 characters`,
            'any.required': `must ${fieldName} name as string`
        })
}
