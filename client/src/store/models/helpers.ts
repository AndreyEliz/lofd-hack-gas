export interface ISalaryRate {
    from?: number
    to?: number
}

export interface ILanguage {
    name: string
    level: string
}

export type WorkType = 'Remote' | 'Fulltime' | 'PartTime'