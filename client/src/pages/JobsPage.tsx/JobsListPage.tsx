import React from 'react';
import { useSelector } from 'react-redux';
import { selectJobList } from 'reducers/jobList.reducer';
import { IJob } from 'store/models/jobModel';
import JobListItem from './JobListItem/JobListItem';
import { useStyles } from './styles';

const JobsPage: React.FC = () => {
    const classes = useStyles()
    const jobs: IJob[] = useSelector(selectJobList)

    return (
        <div className={classes.jobsWrapper}>
            {jobs.map((job: IJob, idx: number) => <JobListItem key={`joblist-item${idx}`} data={job}/>)}
        </div>
    );
}

export default JobsPage;
