import { Status } from './../../../.history/src/app/enum/status.enum_20220315115839';
export interface Server{

id: number;
ipAddress : string;
name : string;
memory: string;
type: string;
imageUrl: string;
status : Status;



}