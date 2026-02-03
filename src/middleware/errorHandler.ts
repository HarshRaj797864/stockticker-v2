export class ZodValidationError extends Error {
    public statusCode: number;
    constructor(message: string) {
        super(message);
        this.statusCode = 500; // not sure about status code
        this.name = "ZodValidationError";
    }
}
