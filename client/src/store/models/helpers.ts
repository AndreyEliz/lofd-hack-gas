export interface ISalaryRate {
    from?: number
    to?: number
}

export interface ILanguage {
    language: string
    level: string
    id?: string | number
}

export type WorkType = 'Remote' | 'Fulltime' | 'PartTime'