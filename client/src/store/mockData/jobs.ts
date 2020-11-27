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
    status: 'new',
    id: 1
}

const JOBS: IJob[] = []
JOBS.push({...testJob})
JOBS.push({...testJob, status: 'open', id: 2})
JOBS.push({...testJob, status: 'published', id: 3})
JOBS.push({...testJob, status: 'closed', id: 4})

for (let i = JOBS.length; i <= 10; i++) {
    JOBS.push({...testJob, id: i})
}

export default JOBS