export class QuestionResponse {
    attempted: boolean = false;
    contradictionCount: number = 0;
    choiceClickTimes: number[] = [];
    choiceInterval: number[] = [];
    questionVisitClickCounts: number[] = [];
    totalTimeToAnswer:number=0;
}
