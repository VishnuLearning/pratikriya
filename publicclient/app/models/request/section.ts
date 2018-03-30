import {Question} from './question';
export class Section {
    id:number;
    name:string;
    questions:Question[];
    attempted:boolean=false;
    totaltimeToComplete:number=0;
    totalClicks:number=0;
    numberOfContradictions:number=0;
    constructor(obj:any) {
        Object.assign(this, obj);
        this.questions = [];
        obj.questions.forEach(element => {
            this.questions.push(new Question(element));
        });
    }
    
}
