import { GeneralException } from "./errors/general-exception";

export interface GeneralResponse<T> {
    data?: T;
    errors: Array<GeneralException>;
    statusCode: number;
}
