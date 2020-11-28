import React from 'react';
import { useSelector } from 'react-redux';
import { IJob } from 'store/models/jobModel';
import { selectJobList } from 'reducers/jobList.reducer';
import { useParams } from 'hooks/router.hooks';
import CardCustom from 'components/CardCustom/CardCustom';
import { CardContent } from '@material-ui/core';
import VacancyCoreData from 'components/VacancyStep/VacancyCoreData';
import Typography from '@material-ui/core/Typography';
import ChipsField from 'components/ChipsField/ChipsField';
import CandidateList from './CandidatesList/CandidatesList';
import Button from '@material-ui/core/Button';
import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    actionButtons: {
        margin: 5
    }
}));


const ManageJobPage: React.FC = () => {
    const classes = useStyles()
    const {id} = useParams()
    const vacancy: IJob = useSelector(selectJobList).find((job:IJob) => job.id == id)

    return (
        <div>
            <Button
                className={classes.actionButtons}
                variant="contained"
                size="small"
                color="primary"
            >
                Опубликовать
            </Button>
            <CardCustom title={`${vacancy.title} - ${vacancy.skillLevel}`} defaultOpen={false}>
                <CardContent>
                <Button
                    className={classes.actionButtons}
                    variant="contained"
                    size="small"
                    color="primary"
                >
                    Редактировать
                </Button>
                    {vacancy.type &&
                    <div>
                        <ChipsField options={vacancy.type.map((type: string) => `#${type}`)} color='default'/>
                        <div dangerouslySetInnerHTML={{ __html: vacancy.summary }} />
                    </div>}
                    <VacancyCoreData data={vacancy}/>
                    {vacancy.benefits &&
                    <div>
                        <Typography component="div"  variant="body2" color="textSecondary">
                            Бонусы:
                        </Typography>
                        <div dangerouslySetInnerHTML={{ __html: vacancy.benefits }} />
                    </div>}
                </CardContent>
            </CardCustom>
            <CandidateList/>
        </div>
    );
}

export default ManageJobPage;
