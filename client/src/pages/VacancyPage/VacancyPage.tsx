import Vacancy from 'components/Vacancy/Vacancy';
import React from 'react';
import { useSelector } from 'react-redux';
import { IJob } from 'store/models/jobModel';
import { selectJobList } from 'reducers/jobList.reducer';
import { useParams } from '../../hooks/router.hooks';


const VacancyPage: React.FC = () => {
    const {id} = useParams()
    const vacancy = useSelector(selectJobList).find((job:IJob) => job.id == id)

    return (
        <div>
            <Vacancy data={vacancy}/>
        </div>
    );
}

export default VacancyPage;