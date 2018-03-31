export class Subject {
    name = '';
    picurl = 'assets/filler.png';
    description = '';

    constructor(obj: any) {
        if (obj) {
            Object.assign(this, obj);
        }
    }
}