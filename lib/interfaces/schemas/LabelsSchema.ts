import Joi from 'joi'

export default Joi.object({
    name: Joi.string().required().error(() => 'must have name as string'),
})
