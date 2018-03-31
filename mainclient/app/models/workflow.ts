import {Stage} from './stage';
import {Subject} from './subject';

export class Workflow {
    name = '';
    id = 0;
    stages: Stage[] = [];
    subject: Subject = new Subject(null);
    constructor(obj: any) {
        if (obj) {
            Object.assign(this, obj);
            this.stages = [];
            obj.stages.forEach(element => {
                this.stages.push(new Stage(element));
            });
            this.subject = new Subject(obj.subject);
        }
    }
}