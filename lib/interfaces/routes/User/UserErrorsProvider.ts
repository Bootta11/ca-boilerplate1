import {BaseErrorsProvider} from "../BaseErrorsProvider";
import {Service} from "typedi";

@Service()
export class UserErrorsProvider extends BaseErrorsProvider{
    getErrors() {
        return [
            {
                code: 'auth/email-already-in-use',
                statusCode: 403,
                message: 'Email is already in use'
            }
        ]
    }
}
