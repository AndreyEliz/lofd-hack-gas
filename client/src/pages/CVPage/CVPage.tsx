import React, {ChangeEvent, useState} from 'react';
import { useSelector } from 'react-redux';
import {ICV} from 'store/models/cvModel';
import {useStyles} from './styles';
import { selectCandidatesList } from 'reducers/candidates.reducer';
import {selectJobList} from "reducers/jobList.reducer";
import { useParams } from 'hooks/router.hooks';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CardCustom from 'components/CardCustom/CardCustom';
import ChipsField from 'components/ChipsField/ChipsField';
import {IEducation} from 'store/models/cvModel';
import {ILanguage} from 'store/models/helpers';
import {IJob} from "store/models/jobModel";
import { filterJobs } from 'pages/JobsPage/JobsListPage';
import JobListItem from 'pages/JobsPage/JobListItem/JobListItem';
import { SKILLS } from 'constants/constants';

const buildList = (
    listDatas: string[],
    title?: string
) => {
    return (
        <>
            {title && <p>{title}</p>}
            <ul>
                {listDatas.map((data: string, idx: number) => (
                    <li key={`list-${Math.random().toString(16)}:${idx}`}>{data}</li>
                ))}
            </ul>
        </>
    );
};

const CVPage: React.FC = () => {
    const classes = useStyles();
    const {id} = useParams();
    const cv = useSelector(selectCandidatesList).find((candidate:ICV) => candidate.id == id);

    if (!cv) {
        return (
            <CardCustom title='О вакансии'>
                <Grid container spacing={2} className={classes.mainGrid}>
                    <Typography component="div" variant="body2" color="textSecondary">
                        Нет данных о CV
                    </Typography>
                </Grid>
            </CardCustom>
        );
    }

    const contacts: string[] = [];
    const {
        email,
        phone,
        skype,
        site,
    } = cv.contacts;
    contacts.push(`E-mail: ${email}`);
    contacts.push(`Номер телефона: ${phone}`);
    contacts.push(`Skype: ${skype || '-'}`);
    contacts.push(`Aдрес веб-сайта: ${site || '-'}`);

    const educations: string[] = cv.education.map((
        {
            title,
            area,
            degree,
            startDate: startDateString,
            endDate: endDateString
        }: IEducation
        ) => {
            const startDate = new Date(startDateString);
            const endDate = new Date(endDateString);

            return `${startDate.toLocaleDateString()} ~ ${endDate.toLocaleDateString()}: ${title}. ${degree}. ${area}`;
        }
    );

    const jobs: IJob[] = useSelector(selectJobList).filter((job:IJob) => job.id <= 2);
    const jobList = filterJobs(jobs, {
        new: false,
        open: false,
        published: false,
        closed: false,
    });

    const missingSkills: string[] = [];

    SKILLS.every((skill: string) => {
        if (missingSkills.length > 2) {
            return false;
        }

        if (!cv.skills.includes(skill)) {
            missingSkills.push(skill);
        }

        return true;
    });

    return (
        <>
            <CardCustom title={cv.fio}>
                <Grid container spacing={2} className={classes.mainGrid}>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <div className={classes.wrapperFirstField}>
                                    <Typography variant="body2" color="textSecondary">Сфера: {cv.area}</Typography>
                                </div>
                                <div className={classes.wrapperField}>
                                    <Typography variant="body2" color="textSecondary">
                                        {buildList(contacts, 'Контакты')}
                                    </Typography>
                                </div>
                                <div className={classes.wrapperField}>
                                    <Typography variant="body2" color="textSecondary">Ключевые навыки:</Typography>
                                    <ChipsField options={cv.skills}/>
                                </div>
                                <div className={classes.wrapperField}>
                                    <Typography variant="body2" color="textSecondary">
                                        {buildList(educations, 'Образование')}
                                    </Typography>
                                </div>
                                <div className={classes.wrapperField}>
                                    <Typography variant="body2" color="textSecondary">
                                        Иностранные языки:
                                    </Typography>
                                    <ChipsField
                                        options={cv.languages.map(({name, level}: ILanguage) => `${name}: ${level.toLowerCase()}`)}/>
                                </div>
                                <div className={classes.wrapperField}>
                                    <Typography variant="body2" color="textSecondary">
                                        Метрика: {cv.quality}
                                    </Typography>
                                </div>
                                <div className={classes.wrapperField}>
                                    <Typography variant="body2" color="textSecondary">
                                        Отсутствуют навыки:
                                    </Typography>
                                    <ChipsField
                                        color='secondary'
                                        options={missingSkills}/>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </CardCustom>
            <CardCustom title='Подходящие вакансии'>
                <div className={classes.jobsWrapper}>
                    {jobList.map((job: IJob) => <JobListItem key={job.id} data={job}/>)}
                </div>
            </CardCustom>
        </>
    );
};

export default CVPage;
