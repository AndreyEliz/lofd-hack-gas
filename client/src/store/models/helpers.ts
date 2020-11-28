export interface ISalaryRate {
    from?: number
    to?: number
}

export interface ILanguage {
    name: string
    level: string
    id?: string | number
}

export type WorkType = 'Remote' | 'Fulltime' | 'PartTime'