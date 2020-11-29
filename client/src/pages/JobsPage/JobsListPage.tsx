import React from 'react';
import { useSelector } from 'react-redux';
import { selectJobList } from 'reducers/jobList.reducer';
import { IJob } from 'store/models/jobModel';
import JobListItem from './JobListItem/JobListItem';
import { useStyles } from './styles';
import CardCustom from 'components/CardCustom/CardCustom';
import { CardContent, Paper } from '@material-ui/core';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import AppsIcon from '@material-ui/icons/Apps';
import Tooltip from '@material-ui/core/Tooltip';
import { DataGrid } from '@material-ui/data-grid';
import Button from '@material-ui/core/Button';
import { useLocation } from 'hooks/router.hooks';

const columns = [
    { field: 'title', headerName: 'Позиция', width: 200},
    { field: 'status', headerName: 'Статус', width: 200},
    { field: 'openDate', headerName: 'Дата открытия', width: 200 },
    { field: 'publishedDate', headerName: 'Дата публикации', width: 200 },
    { field: 'passedCandidates', headerName: 'Прошедшие кандидаты', width: 200 },
    { field: 'activeCandidates', headerName: 'Активные кандидаты', width: 200 },
]

export const filterJobs = (jobs: IJob[], params: any) => jobs.filter((job: IJob) => {
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
    const {navigate} = useLocation()
    const [gridView, setGridView] = React.useState(false)
    const toggleView = () =>  setGridView(!gridView)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFilterState({ ...filterState, [event.target.name]: event.target.checked });
    };

    const jobList = filterJobs(jobs, filterState)

    return (
        <>
        <CardCustom className={classes.filters} title="Настройки отображения" defaultOpen={false}>
            <CardContent>
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
                    <Tooltip title="Сменить режим отображения">
                        <span>
                            <Button aria-label="grid-view" onClick={toggleView} startIcon={<AppsIcon />} size="small">
                                отображать в таблице
                            </Button>
                        </span>
                    </Tooltip>
            </CardContent>
        </CardCustom>
        {!gridView ?
        <div className={classes.jobsWrapper}>
            {jobList.map((job) => <JobListItem key={job.id} data={job}/>)}
        </div>
        :
        <CardCustom collapsable={false} className={classes.gridCard} noHeader={true}>
            <CardContent className={classes.gridCardContent}>
                <DataGrid rows={jobList} columns={columns} pageSize={5} checkboxSelection onRowClick={(row:any) => navigate(`/manage-job/${row.data.id}`)}/>
            </CardContent>
        </CardCustom>
        }

        </>
    );
}

export default JobsPage;
