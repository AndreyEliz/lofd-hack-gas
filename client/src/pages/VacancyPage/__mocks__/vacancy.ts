import {IJob} from 'store/models/jobModel';

export const vacancy: IJob = {
    skillLevel: "Middle",
    title: 'Full-stack Level 1',
    type: ['Fulltime', 'Remote'],
    summary: "<p><strong>Привет</strong></p><p>Как дела?</p><p>Описание</p><ul><li>Требования1. Ссылка 1</li><li>Требования2. Ссылка 2. Еще какой-то текст.</li><li>Требования3</li></ul><p></p><p>Пожелания</p><p></p>",
    tasks: 'таска1',
    mainSkills: ["c#", "java"],
    secondarySkills: ["excel", "word"],
    salaryRate: {
        from: 2100,
        to: 2800,
    },
    languages: [
        {
            name: 'Русский',
            level: 'Родной'
        },
        {
            name: 'Английский',
            level: 'Свободный'
        },
    ],
    benefits: "<ul><li>Социальный пакет</li><li>ДМС</li></ul>",
    id: 39736,
    status: 'published',
    activeCandidates: 5,
    passedCandidates: 3
};
