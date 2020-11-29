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
import Tooltip from '@material-ui/core/Tooltip';

interface IJobListItemProps {
    data: IJob
}

const getTooltipTitle = (data:IJob) => {
    if (data.status === 'new') return 'Новая заявка';
    if (data.status === 'open') return 'Заявка открыта, но не опубликована';
    if (data.status === 'published') return 'Заявка опубликована';
    if (data.status === 'closed') return 'Есть прошедшие все этапы соискатели';
    else return ''
}

const JobListItem: React.FC<IJobListItemProps> = ({data}) => {
    const classes = useStyles(data)
    const {navigate} = useLocation()

    const tooltipTitle = getTooltipTitle(data)
    const openDate = data.openDate.toLocaleDateString()
    const publishDate = data.publishedDate?.toLocaleDateString()
    const title = (
    <span >
        {data.title}
        <span className={classes.dateHeader}>{` - открыто ${openDate}`}</span>
        <span className={classes.dateHeader}>{data.publishedDate && `,  опубликовано ${publishDate}`}</span>
    </span>)

    return (
        <div className={classes.jobWrapper}>
            <CardCustom 
                collapsable={false}
                title={title} 
                avatar={
                <Tooltip title={tooltipTitle}>
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        {data.status === 'new' && <FiberNewIcon/>}
                        {data.status === 'open' && <NewReleasesIcon/>}
                        {data.status === 'published' && <PublicIcon/>}
                        {data.status === 'closed' && <ThumbUpIcon/>}
                    </Avatar>
                </Tooltip>
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
                            onClick={() => navigate(`/manage-job/${data.id}`)}
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