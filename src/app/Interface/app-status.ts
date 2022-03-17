import { DataState } from "../enum/data-state.enums";

export interface AppState<T>{


    dataState: DataState;
appData?: T;
error?: string;
    
}