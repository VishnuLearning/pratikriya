import { QuestionResponse } from './questionResponse';
export class SectionResponse {
    attempted: boolean = false;
    totaltimeToComplete: number = 0;
    totalClicks: number = 0;
    numberOfContradictions: number = 0;
    questionResponses: QuestionResponse[];
}