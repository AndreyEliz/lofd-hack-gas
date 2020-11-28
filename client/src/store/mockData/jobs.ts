import { IJob } from '../models/jobModel';

const testJob: IJob = {
    skillLevel: 'senior',
    title: 'Frontend developer',
    type: ['Remote', 'Fulltime'],
    summary: '<p><strong>Что мы ждем от Вас:</strong></p><ul><li><p>Анализ и разработка архитектуры существующих баз и конфигураций 1С Бухгалтерия, ЭДО и ЗУП.</p> </li> <li> <p>Разработка нового функционала, поддержка и оптимизация существующих баз и конфигураций.</p> </li> <li> <p>Самостоятельная разработка и реализация ТЗ в соответствии с функциональными требованиями подразделений компании, своевременное обновление информационных баз.</p> </li> <li> <p>Написание технической документации.</p> </li> <li> <p>Интеграция 1С с другими системами.</p> </li> </ul>',
    tasks: '',
    mainSkills: ['JavaScript', 'React', 'html', 'css'],
    secondarySkills: [],
    salaryRate: {from: 150000, to: 200000},
    languages: [{name: 'English', level: 'intermediate'}],
    benefits: '<p><strong>Мы предлагаем:</strong></p><ul> <li>Высокий уровень ежемесячного дохода.</li> <li>Возможность профессионального роста и развития.</li> <li>Ежеквартальное (система целей и ключевых показателей) и годовое премирование.</li> <li>Расширенный социальный пакет: полный пакет ДМС, страховка при выезде за рубеж, обучение.</li> <li>Материальную помощь к отпуску.</li> <li>Ежегодный оплачиваемый отпуск 30 дней.</li> <li>Скидки на абонементы в фитнес-клубы.</li> <li>Уникальную корпоративную программу приобретения автотранспорта.</li> </ul>',
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

export default JOBS