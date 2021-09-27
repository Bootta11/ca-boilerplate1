export abstract class BaseErrorsProvider {
    abstract getErrors(): {
        code: string,
        statusCode: number,
        message: string,
    }[]
}
