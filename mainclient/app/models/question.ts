import { Choice } from "./choice";

export class Question {
    text:string='';
    name:string='';
    qType:string='text';
    choices:Choice[]=[];
}
