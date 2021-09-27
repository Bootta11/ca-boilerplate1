import Joi from 'joi'
import {requiredAndMinLength} from "../helpers";

export default Joi.object({
    name: requiredAndMinLength('string', 'name', 2),
    lastname: requiredAndMinLength('string', 'lastname', 2),
    email: requiredAndMinLength('string', 'email', 2),
    password: requiredAndMinLength('string', 'password', 2),
})
