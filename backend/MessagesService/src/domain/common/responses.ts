interface ErrorResponse {
    status: number;    
    error: string;
}

interface SuccessResponse {
    status: number;
    message: string;
    data: any;
}

export { ErrorResponse, SuccessResponse };