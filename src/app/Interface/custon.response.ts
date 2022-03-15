import { Server } from "./Server";

export interface CustomResponse{


    timeStamp: Date;

    statusCode: number;
    status: String;
    reason: String;
    message: String;
    developerMessage: string;
    data: {servers?: Server[], server?: Server};
}