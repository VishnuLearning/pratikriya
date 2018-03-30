import { SectionResponse } from './sectionResponse';
export class FormResponse {
    id: number;
    answers: SectionResponse[];
    totalTimeToComplete: number = 0;
    totalContradictions: number = 0;
    totalClicks: number = 0;

}
