import {Response} from "restify";
import {UserErrorsProvider} from "./User/UserErrorsProvider";
import {Service} from "typedi";
import {BaseErrorsProvider} from "./BaseErrorsProvider";
import {domainToUnicode} from "url";

@Service()
export class RouteErrors {
    private errorProviders = []
    private errors

    constructor(
        userErrorsProvider: UserErrorsProvider
    ) {
        this.errors = {
            "unknown-error": {
                statusCode: 500,
                    message: "Unknown error."
            }
        }
        this.loadErrors(userErrorsProvider)
    }

    private loadErrors(errorsProvider: BaseErrorsProvider) {
        const ctrlThis = this
        errorsProvider
            .getErrors()
            .forEach((err) => {
                console.log(ctrlThis.errors, err.code)
                ctrlThis.errors[err.code] = {
                    statusCode: err.statusCode,
                    message: err.message,
                }
            })
    }

    errorResponse(res: Response, err) {
        const foundErrorDefinition = this.errors[err['code']] || this.errors['unknown-error']

        res.status(foundErrorDefinition.statusCode)
        return res.json({
            'error': foundErrorDefinition.message
        });
    }
}
