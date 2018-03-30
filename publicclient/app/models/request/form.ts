import { Section } from './section';
export class Form {
    id: number;
    sections: Section[];
    totalTimeToComplete: number = 0;
    totalContradictions: number = 0;
    totalClicks: number = 0;

    constructor(obj: any) {
        if (obj) {
            Object.assign(this, obj);
            this.sections = [];
            obj.sections.forEach(element => {
                this.sections.push(new Section(element));
            });
        }
    }
}
