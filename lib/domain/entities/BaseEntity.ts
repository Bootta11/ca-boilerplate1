import {ObjectSchema} from "joi";

export abstract class BaseEntity {
    constructor(payload: any) {
        console.log('parent', payload);
        const {value, error} = this.getObjectSchema().validate(payload);
        if(error){
            console.log('err', error)
            throw new Error(error.message);
        }
    }

    validate(payload: any){
        this.getObjectSchema().validate(payload)
    }

    abstract getObjectSchema(): ObjectSchema
}
