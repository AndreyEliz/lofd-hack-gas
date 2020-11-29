import React, {useState, useEffect, ChangeEvent} from 'react';
import {IJob} from 'store/models/jobModel';
import {useStyles} from './styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardCustom from "components/CardCustom/CardCustom";
import VacancyCoreData from './VacancyCoreData';
import ChipsField from 'components/ChipsField/ChipsField';

interface IVacancyStepProps {
    data: IJob;
    defaultOpen?: boolean;
    onSend: (e: ChangeEvent<HTMLInputElement>) => void;
}

const VacancyStep = ({
    data,
    defaultOpen = true,
    onSend
}: IVacancyStepProps) => {
    const classes = useStyles();

    if (!data) {
        return (
            <CardCustom defaultOpen={defaultOpen} title='О вакансии'>
                <Grid container spacing={2} className={classes.mainGrid}>
                    <Typography component="div" variant="body2" color="textSecondary">
                        Нет данных о выбранной вакансии
                    </Typography>
                </Grid>
            </CardCustom>
        );
    }

    const {
        title,
        summary,
        skillLevel,
        type,
        salaryRate,
        benefits
    } = data;
    const salary = salaryRate ? `${salaryRate.from || '...'} ~ ${salaryRate.to || '...'} руб.` : '';
    const typeList = type && <ChipsField options={type.map((type: string) => `#${type}`)} color='default'/>;

    return (
        <div className={classes.wrapper}>
            <CardCustom defaultOpen={defaultOpen} title={`${title} (${skillLevel}) ... ${salary}`}>
                <Grid container spacing={2} className={classes.mainGrid}>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <div>
                                    {typeList}
                                    <div dangerouslySetInnerHTML={{__html: summary}}/>
                                </div>
                                <VacancyCoreData data={data}/>
                                {benefits && (
                                    <>
                                        <Typography component="div" variant="body2" color="textSecondary">
                                            Бонусы:
                                        </Typography>
                                        <div dangerouslySetInnerHTML={{__html: benefits}}/>
                                    </>
                                )}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </CardCustom>
            <div className={classes.uploadButton}>
                <Button
                    variant="contained"
                    component="label"
                    color="primary"
                >
                    Загрузить резюме
                    <input
                        name='cv'
                        type="file"
                        hidden
                        accept=".pdf, .doc, .docx"
                        onChange={onSend}
                    />
                </Button>
            </div>
        </div>
    );
};

export default VacancyStep;
