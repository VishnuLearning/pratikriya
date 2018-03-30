import { Choice } from './choice';
export class Question {
    id: number;
    text: string;
    name: string;
    qtype: string;
    choices: Choice[];
    attempted: boolean = false;
    contradictionCount: number = 0;
    choiceClickTimes: number[] = [];
    choiceInterval: number[] = [];
    questionVisitClickCounts: number[] = [];
    totalTimeToAnswer:number=0;

    constructor(obj:any) {
        Object.assign(this, obj);
        this.choices=[];
        obj.choices.forEach(element => {
            this.choices.push(new Choice(element));
        });
    }
}
