import { Choice } from "./choice";

export class Question {
    text:string='';
    name:string='';
    qtype:string='text';
    choices:Choice[]=[];
}
