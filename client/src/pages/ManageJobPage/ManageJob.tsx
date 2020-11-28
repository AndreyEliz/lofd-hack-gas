import Vacancy from 'components/Vacancy/Vacancy';
import React from 'react';
import { useSelector } from 'react-redux';
import { IJob } from 'store/models/jobModel';
import { selectJobList } from 'reducers/jobList.reducer';
import { useParams } from '../../hooks/router.hooks';
import CardCustom from 'components/CardCustom/CardCustom';
import { CardContent } from '@material-ui/core';
import VacancyCoreData from '../../components/Vacancy/VacancyCoreData';
import Typography from '@material-ui/core/Typography';
import ChipsField from 'components/ChipsField/ChipsField';


const ManageJobPage: React.FC = () => {
    const {id} = useParams()
    const vacancy: IJob = useSelector(selectJobList).find((job:IJob) => job.id == id)

    return (
        <div>
            <CardCustom title={vacancy.title} defaultOpen={false}>
                <CardContent>
                    <div>
                        {vacancy.type &&
                        <ChipsField options={vacancy.type.map((type: string) => `#${type}`)} color='default'/>}
                        <div dangerouslySetInnerHTML={{ __html: vacancy.summary }} />
                    </div>
                    <VacancyCoreData data={vacancy}/>
                </CardContent>
            </CardCustom>
        </div>
    );
}

export default ManageJobPage;