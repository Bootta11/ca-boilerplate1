import Joi from 'joi'
import {requiredAndMinLength} from "./helpers";

export default Joi.object({
    name: requiredAndMinLength('string', 'name', 2),
})
