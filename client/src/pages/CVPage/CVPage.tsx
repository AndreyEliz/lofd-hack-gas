import React, {ChangeEvent, useState} from 'react';
// import { useSelector } from 'react-redux';
import {ICV} from 'store/models/cvModel';
import {useStyles} from './styles';
// import candidatesList from 'reducers/candidates.reducer';
// import { useParams } from 'hooks/router.hooks';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CardCustom from 'components/CardCustom/CardCustom';
import ChipsField from 'components/ChipsField/ChipsField';
import {IEducation} from 'store/models/cvModel';
import {ILanguage} from 'store/models/helpers';

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
    // const {id} = useParams();
    // const cv = useSelector(candidatesList).find((candidate:ICV) => candidate.id == id);
    const cv: ICV = {
        id: 1,
        fio: "Andrey Elizarov",
        area: 'IT',
        label: "Developer",
        skills: ["Abode","Adobe Illustrator"],
        contacts: {
            email:"braunbrustigel@gmail.com",
            phone:"+7 (905) 224-3810"
        },
        internal:false,
        status:"New",
        source:"HH",
        quality:10,
        type:null,
        education:[
            {
                id: 10,
                title: "СПбГУ НИУ ИТМО",
                area: "Санкт-Петербург",
                degree: "специалитет",
                startDate: "2011-01-01T00:00:00",
                endDate: "2016-01-10T00:00:00"
            },
            {
                id: 11,
                title: "СПбГУ НИУ ИТМО",
                area: "Санкт-Петербург",
                degree: "магистр",
                startDate: "2016-06-01T00:00:00",
                endDate: "2018-06-10T00:00:00"
            }
        ],
        languages:[
            {
                id:1,
                name:"Русский",
                level:"родной"
            }
        ],
        publication:[],
        dateOfBirth:"2020-11-28T23:30:08.026Z"
    };

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

    return (
        <CardCustom title={cv.fio}>
            <Grid container spacing={2} className={classes.mainGrid}>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
{/*
                            <div className={classes.wrapperField}>
                                <Typography variant="body1" color="textSecondary">ФИО: <strong>{cv.fio}</strong></Typography>
                            </div>
*/}
                            {/*
                                <div className={classes.wrapperField}>
                                    <Typography variant="body2" color="textSecondary">Должность: {data.label}</Typography>
                                </div>
*/}
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
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </CardCustom>
    );
};

export default CVPage;
