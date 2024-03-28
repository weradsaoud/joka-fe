export interface ILoginResponse {
    token?: any;
    refreshToken?: any;
    success: boolean;
    errors?: any;
    is2StepVerificationRequired: boolean;
    provider: string;
    randomCodes: string[];
}