import { Choice } from "./choice";

export class Question {
    _id:string;
    text:string;
    name:string;
    qType:string;
    choices:Choice[];
}
