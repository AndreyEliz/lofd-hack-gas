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

interface IJobListItemProps {
    data: IJob
}

const JobListItem: React.FC<IJobListItemProps> = ({data}) => {
    const classes = useStyles(data)

    return (
        <div className={classes.jobWrapper}>
            <CardCustom title={data.title} avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                    {data.status === 'new' && <FiberNewIcon/>}
                    {data.status === 'open' && <NewReleasesIcon/>}
                    {data.status === 'published' && <PublicIcon/>}
                    {data.status === 'closed' && <ThumbUpIcon/>}
                </Avatar>
            }>
                <CardContent>{data.title}</CardContent>
            </CardCustom>
        </div>
    );
}

export default JobListItem;