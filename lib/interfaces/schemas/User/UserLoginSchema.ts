import Joi from 'joi'
import {requiredAndMinLength} from "../helpers";

export default Joi.object({
    email: requiredAndMinLength('string', 'email', 2),
    password: requiredAndMinLength('string', 'password', 2),
})
