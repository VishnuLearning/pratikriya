export class Choice {
    id:string;
    text:string;
    score:number;

    constructor(obj:any) {
        Object.assign(this, obj);
    }
}
