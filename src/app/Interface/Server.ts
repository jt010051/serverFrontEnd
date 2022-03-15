import { Status } from './../../../.history/src/app/enum/status.enum_20220315115839';
export interface Server{

id: number;
ipAddress : String;
name :String;
memory: String;
type: String;
imageUrl: String;
status : Status;



}