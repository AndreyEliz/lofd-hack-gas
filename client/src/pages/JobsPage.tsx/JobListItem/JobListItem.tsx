import Avatar from '@material-ui/core/Avatar';
import CardContent from '@material-ui/core/CardContent';
import React from 'react';
import { IJob } from 'store/models/jobModel';
import { useStyles } from './styles';
import CardCustom from '../../../components/CardCustom/CardCustom';
import NewReleasesIcon from '@material-ui/icons/NewReleases';
import FiberNewIcon from '@material-ui/icons/FiberNew';
import PublicIcon from '@material-ui/icons/Public';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useLocation } from 'hooks/router.hooks';

interface IJobListItemProps {
    data: IJob
}

const JobListItem: React.FC<IJobListItemProps> = ({data}) => {
    const classes = useStyles(data)
    const {navigate} = useLocation()

    return (
        <div className={classes.jobWrapper}>
            <CardCustom 
                collapsable={false}
                title={data.title} 
                avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                    {data.status === 'new' && <FiberNewIcon/>}
                    {data.status === 'open' && <NewReleasesIcon/>}
                    {data.status === 'published' && <PublicIcon/>}
                    {data.status === 'closed' && <ThumbUpIcon/>}
                </Avatar>
            }>
                <CardContent>
                    <div className={classes.cardContent}>
                        <div className={classes.jobSummary}>
                            <Typography variant="subtitle2">
                                Прошедшие кандидаты: <span className={classes.candidatesCount}>{data.passedCandidates}</span>
                            </Typography>
                            <Typography variant="subtitle2">
                                Активные кандидаты: <span className={classes.candidatesCount}>{data.activeCandidates}</span>
                            </Typography>
                        </div>
                        <div className={classes.jobActions}>
                        <Button
                            className={classes.actionButtons}
                            variant="contained"
                            size="small"
                            color="primary"
                            onClick={() => navigate(`/vacancy/${data.id}`)}
                        >
                            Подробнее
                        </Button>
                        <Button
                            className={classes.actionButtons}
                            variant="contained"
                            size="small"
                            color="default"
                        >
                            Закрыть
                        </Button>
                        </div>
                    </div>
                </CardContent>
            </CardCustom>
        </div>
    );
}

export default JobListItem;