import {requiredAndMinLength} from "./helpers";
import Joi from "joi";

export default Joi.object({
    countryId: Joi.number().required().error(() => 'must have countryId as number'),
    address: requiredAndMinLength('string', 'address', 2),
    unitOrApt: requiredAndMinLength('string', 'unitOrApt', 1),
    city: requiredAndMinLength('string', 'city', 1),
    state: requiredAndMinLength('string', 'state', 1),
    zip: requiredAndMinLength('string', 'address', 1),
})
