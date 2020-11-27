import { IJob } from '../models/jobModel';

const testJob: IJob = {
    skillLevel: 'senior',
    title: 'Frontend developer',
    type: ['Remote', 'Fulltime'],
    summary: '',
    tasks: '',
    mainSkills: ['JavaScript', 'React', 'html', 'css'],
    secondarySkills: [],
    salaryRate: {from: 150000, to: 200000},
    languages: [{name: 'English', level: 'intermediate'}],
    benefits: '',
    activeCandidates: 5,
    passedCandidates: 1,
    status: 'open',
    id: 1
}

const JOBS: IJob[] = []

for (let i = 1; i <= 11; i++) {
    JOBS.push({...testJob, id: i})
}

export default JOBS