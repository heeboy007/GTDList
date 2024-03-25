
class Response{

    error: boolean;
    statusCode: number;
    payload?: object;

    constructor(error: boolean, statusCode: number) {
        this.error = error;
        this.statusCode = statusCode;
    }

}

export default Response;