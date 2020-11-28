import React from 'react';
import { useSelector } from 'react-redux';
import { selectJobList } from 'reducers/jobList.reducer';
import { IJob } from 'store/models/jobModel';
import JobListItem from './JobListItem/JobListItem';
import { useStyles } from './styles';
import CardCustom from 'components/CardCustom/CardCustom';
import { CardContent } from '@material-ui/core';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';

const filterJobs = (jobs: IJob[], params: any) =>  jobs.filter((job:IJob) => {
        if (!params.new && !params.open && !params.public && !params.ready) return true
        else return params[job.status]
    })

const JobsPage: React.FC = () => {
    const classes = useStyles()
    const jobs: IJob[] = useSelector(selectJobList)
    const [filterState, setFilterState] = React.useState({
        new: false,
        open: false,
        published: false,
        closed: false,
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFilterState({ ...filterState, [event.target.name]: event.target.checked });
    };

    const jobList = filterJobs(jobs, filterState)

    return (
        <>
        <CardCustom className={classes.filters} title="Настройки отображения" defaultOpen={false}>
            <CardContent>
            <FormGroup row>
                <FormControlLabel
                    control={
                    <Checkbox
                        checked={filterState.new}
                        onChange={handleChange}
                        name="new"
                        color="primary"
                    />
                    }
                    label="Новые"
                />
                <FormControlLabel
                    control={
                    <Checkbox
                        checked={filterState.open}
                        onChange={handleChange}
                        name="open"
                        color="primary"
                    />
                    }
                    label="Открытые не опубликованные"
                />
                <FormControlLabel
                    control={
                    <Checkbox
                        checked={filterState.published}
                        onChange={handleChange}
                        name="published"
                        color="primary"
                    />
                    }
                    label="Опубликованные"
                />
                <FormControlLabel
                    control={
                    <Checkbox
                        checked={filterState.closed}
                        onChange={handleChange}
                        name="closed"
                        color="primary"
                    />
                    }
                    label="Есть прошедшие все этапы соискатели"
                />
                </FormGroup>
            </CardContent>
        </CardCustom>
        <div className={classes.jobsWrapper}>
            {jobList.map((job) => <JobListItem key={job.id} data={job}/>)}
        </div>
        </>
    );
}

export default JobsPage;
