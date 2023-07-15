 export const ADD_DATA = "ADD_DATA";
 export const UPDATE_DATA = "UPDATE_DATA";
 export const REMOVE_DATA = "REMOVE__DATA";

 export interface Data {
    id: number;
    content: string;
 }

 export interface AddDataAction {
    type: typeof ADD_DATA;
    payload: string;
 }

 export interface RemoveDataAction {
   type: typeof REMOVE_DATA;
   payload: number;
 }

 export interface UpdateDataAction {
   type: typeof UPDATE_DATA;
   payload: {
     id: number;
     data: string;
   };
 }

 export type DataActionTypes = AddDataAction | RemoveDataAction | UpdateDataAction
