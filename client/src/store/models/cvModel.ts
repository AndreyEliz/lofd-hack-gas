import { ISalaryRate, ILanguage } from './helpers';

interface IContacts {
    email: string
    phone: string
    skype?: string
    site?: string
    id?: string | number
    candidateId? : string | number
}

export interface IEducation {
    id: string | number
    title: string
    area: string // Computer Science, engeneering, etc
    degree: string // Specialist, Bachelor, Master, Phd, etc
    startDate: string | Date
    endDate: string | Date
    candidateId?: string | number
}

interface IAwards {
    title: string
    date: string | Date
    summary: string
}

interface IPublication {
    name: string
    publisher: string
    releaseDate: string | Date
    summary: string
    id: string | number
}

export interface ICV {
    fio: string
    label: string // Programmer, Designer, etc.
    area: string // web, desktop, ar/vr, ui/ux, etc
    dateOfBirth: string | Date
    contacts: IContacts
    education: IEducation[]
    awards?: IAwards[]
    publications?: IPublication[]
    publication?: IPublication[]
    languages: ILanguage[]
    salary?: ISalaryRate
    skills: string[],
    id: number | string
    internal: boolean
    status: string
    source: string
    quality: number
    type?: any
}
