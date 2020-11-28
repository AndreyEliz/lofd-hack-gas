import React from 'react';
import { IJob } from 'store/models/jobModel';
import { useStyles } from './styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardCustom from "components/CardCustom/CardCustom";
import VacancyCoreData from './VacancyCoreData';
import ChipsField from 'components/ChipsField/ChipsField';
interface IVacancyProps {
    data: IJob,
    defaultOpen?: boolean
}

const Vacancy: React.FC<IVacancyProps> = ({data, defaultOpen=true}) => {
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
                            <Button
                                variant="contained"
                                component="label"
                            >
                                Загрузить резюме
                                <input
                                    name='cv'
                                    type="file"
                                    hidden
                                    accept=".pdf, .doc, .docx"
                                />
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </CardCustom>
    );
};

export default Vacancy;
