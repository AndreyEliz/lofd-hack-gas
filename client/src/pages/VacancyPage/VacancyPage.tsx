import React, {ChangeEvent, useState} from 'react';
import { useSelector } from 'react-redux';
import { IJob } from 'store/models/jobModel';
import { selectJobList } from 'reducers/jobList.reducer';
import { useParams } from 'hooks/router.hooks';
import TimeLineField from 'components/TimeLineField/TimeLineField';
import VacancyStep from 'components/VacancyStep/VacancyStep';
import CVStep from 'components/CVStep/CVStep';
import OtherStep from 'components/OtherStep/OtherStep';
import { postFile } from 'sfapi';
import { API_URL } from 'config';

interface TimeLineData {
    value: number;
    previous: number;
}

const VacancyPage: React.FC = () => {
    const {id} = useParams();
    const vacancy = useSelector(selectJobList).find((job:IJob) => job.id == id);
    const [timeLineData, setTimeLineData] = useState<TimeLineData>({ value: 0, previous: 0 });
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const updateStep = (step: number) => {
        setTimeLineData({ value: step, previous: timeLineData.value })
    };
    const [lastTakenStep, setLastTakenStep] = useState(0);
    const checkMaxTakenStep = (step: number) => {
        if (step > lastTakenStep) {
            setLastTakenStep(step);
        }
    };
    const doNextStep = (nextStep: number) => {
        checkMaxTakenStep(nextStep);
        updateStep(nextStep);
    };
    const handleSend = (e: ChangeEvent<HTMLInputElement>) => {
        const files: any = e.target.files;
        setIsLoading(true)
        const formData = new FormData();

        formData.append('file', files[0]);

        fetch(`${API_URL}/api/candidates/uploadCsv`, {
            method: 'POST',
            body: formData,
            headers:{
                        // 'content-type': 'multipart/form-data',
                    }
        }).then((response:any) => {
            // const result = response.json();
            setIsLoading(false)
            doNextStep(1);
        }).catch((error:any) => {
            console.error('Ошибка:', error);
            setIsLoading(false)
        })
        
    };
    const handleSubmitCV = () => {
        doNextStep(2);
    };
    const handleIndexClick = (step: number) => {
        if (step <= lastTakenStep) {
            updateStep(step);
        }
    };

    return (
        <div>
            <TimeLineField
                index={timeLineData.value}
                indexClick={handleIndexClick}
                values={['Шаг 1', 'Шаг 2', 'Шаг 3', 'Шаг 4', 'Шаг 5']}
            />
            <VacancyStep
                data={vacancy}
                onSend={handleSend}
                defaultOpen={timeLineData.value === 0}
            />
            {timeLineData.value >= 1 && (
                <CVStep
                    defaultOpen={timeLineData.value === 1}
                    onSubmit={handleSubmitCV}
                />
            )}
            {timeLineData.value >= 2 && (
                <OtherStep
                    step={timeLineData.value}
                />
            )}
        </div>
    );
};

export default VacancyPage;
