export interface IcommonResponse {
    statusCode: number;
    message?: string;
    isError: boolean;
    data?: any;
    error?: Ierror ;
}

export interface Ierror{
    message: string;
}