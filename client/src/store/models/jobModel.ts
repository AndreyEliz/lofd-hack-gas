import {
    ILanguage,
    ISalaryRate,
    WorkType
} from "./helpers";

type TJobStatus = 'new' | 'open' | 'published' | 'closed'
export interface IJob {
    skillLevel?: string
    title: string
    type?: WorkType[]
    summary: string
    tasks?: string
    mainSkills: string[]
    secondarySkills: string[]
    salaryRate?: ISalaryRate
    languages?: ILanguage[]
    benefits?: string
    id: number | string
    status: TJobStatus
    activeCandidates: number
    passedCandidates: number
}
