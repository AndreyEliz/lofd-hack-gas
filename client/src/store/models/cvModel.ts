import { ISalaryRate, ILanguage } from './helpers';

interface IContacts {
    email: string
    phone: string
    skype: string
    site: string
    id?: string | number
    candidateId? : string | number
}

interface IEducation {
    title: string
    area: string // Computer Science, engeneering, etc
    degree: string // Specialist, Bachelor, Master, Phd, etc
    startDate: string | Date
    endDate: string | Date
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
}

export interface ICV {
    fio: string
    label: string // Programmer, Designer, etc.
    area: string // web, descktop, ar/vr, ui/ux, etc
    dateOfBirth: string | Date
    contacts: IContacts[]
    education: IEducation[]
    awards: IAwards[]
    publications?: IPublication[]
    publication?: IPublication[]
    languages: ILanguage[]
    salary?: ISalaryRate
    skills: string[],
    id: number | string
}