import React, { useState, useEffect, ChangeEvent } from 'react';
import { IJob } from 'store/models/jobModel';
import { useStyles } from './styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardCustom from "components/CardCustom/CardCustom";
import VacancyCoreData from './VacancyCoreData';
import ChipsField from 'components/ChipsField/ChipsField';
import HorizontalTimeline from 'react-horizontal-timeline';
import './styles.css';

interface ICommonStepProps {
    defaultOpen: boolean;
}

interface IFirstStep extends ICommonStepProps {
    data: IJob;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const FirstStep = ({ data, defaultOpen, onChange }: IFirstStep) => {
    const classes = useStyles();

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
        <>
            <CardCustom defaultOpen={defaultOpen} title={`${title} (${skillLevel}) ... ${salary}`}>
                <Grid container spacing={2} className={classes.mainGrid}>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <div>
                                    {typeList}
                                    <div dangerouslySetInnerHTML={{ __html: summary }} />
                                </div>
                                <VacancyCoreData data={data}/>
                                {benefits && (
                                    <>
                                        <Typography component="div"  variant="body2" color="textSecondary">
                                            Бонусы:
                                        </Typography>
                                        <div dangerouslySetInnerHTML={{ __html: benefits }} />
                                    </>
                                )}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </CardCustom>
            <Button
                variant="contained"
                component="label"
                className={classes.uploadButton}
            >
                Загрузить резюме
                <input
                    name='cv'
                    type="file"
                    hidden
                    accept=".pdf, .doc, .docx"
                    onChange={onChange}
                />
            </Button>
        </>
    );
};

interface IOtherStep extends ICommonStepProps {
    step: number;
}

const OtherStep = ({ step, defaultOpen }: IOtherStep) => {
    const classes = useStyles();

    return (
        <CardCustom defaultOpen={defaultOpen} title={`Шаг ${step+1}`}>
            <Grid container spacing={2} className={classes.mainGrid}>
                <Typography component="div"  variant="body2" color="textSecondary">
                    Шаг {step+1}
                </Typography>
            </Grid>
        </CardCustom>
    );
};

interface TimeLineData {
    value: number;
    previous: number;
}

// interface IHorizontalTimeLineField {
//     onClick: (currentValue: TimeLineData) => void;
//     data: TimeLineData;
// }

interface IVacancyProps {
    data: IJob;
    defaultOpen?: boolean;
}

const Vacancy = ({data, defaultOpen = true}: IVacancyProps) => {
    const [timeLineData, setTimeLineData] = useState({ value: 0, previous: 0 });
    const [lastTakenStep, setLastTakenStep] = useState(0);
    const updateStep = (step: number) => {
        setTimeLineData({ value: step, previous: timeLineData.value })
    };
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
console.log(files);
        const newStep = 1;

        if (newStep > lastTakenStep) {
            setLastTakenStep(newStep);
        }

        updateStep(newStep);
    };

    return (
        <>
            <div
                style={{
                    width: '800px',
                    height: '60px',
                    margin: '0 auto'
                }}
            >
                <HorizontalTimeline
                    index={timeLineData.value}
                    indexClick={(index: number) => {
console.log(index, lastTakenStep);
                        if (index <= lastTakenStep) {
                            updateStep(index);
                        }
                    }}
                    values={['Шаг 1', 'Шаг 2', 'Шаг 3', 'Шаг 4', 'Шаг 5']}
                    styles={{
                        background: '#f8f8f8',
                        foreground: '#03a9f4',
                        outline: '#bdbdbd'
                    }}
                    isOpenBeginning={false}
                    isOpenEnding={false}
                    linePadding={85}
                    minEventPadding={50}
                    maxEventPadding={50}
                    getLabel={(value: string) => value}
                />
            </div>
            {timeLineData.value === 0 && <FirstStep data={data} defaultOpen={defaultOpen} onChange={handleChange} />}
            {timeLineData.value > 0 && <OtherStep step={timeLineData.value} defaultOpen={defaultOpen} />}
        </>
    );
};

export default Vacancy;
