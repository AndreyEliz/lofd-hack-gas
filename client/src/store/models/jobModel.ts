import { 
    ILanguage, 
    ISalaryRate, 
    WorkType 
} from "./helpers";

export interface IJob {
    skillLevel?: string
    title: string
    type?: WorkType[]
    summary: string
    tasks?: string
    mainSkills: string[]
    secondarySkills: string[]
    salaryRate?: ISalaryRate
    languges?: ILanguage[]
    benefits?: string
}