import React, {ChangeEvent, useState} from 'react';
import { useSelector } from 'react-redux';
import { IJob } from 'store/models/jobModel';
import { selectJobList } from 'reducers/jobList.reducer';
import { useParams } from 'hooks/router.hooks';
import TimeLineField from 'components/TimeLineField/TimeLineField';
import VacancyStep from 'components/VacancyStep/VacancyStep';
import CVStep from 'components/CVStep/CVStep';
import OtherStep from 'components/OtherStep/OtherStep';

interface TimeLineData {
    value: number;
    previous: number;
}

const VacancyPage: React.FC = () => {
    const {id} = useParams();
    const vacancy = useSelector(selectJobList).find((job:IJob) => job.id == id);
    const [timeLineData, setTimeLineData] = useState<TimeLineData>({ value: 0, previous: 0 });
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
        const files = e.target.files;
console.log('▓▓▓Files:', files);
        doNextStep(1);
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
            {timeLineData.value}
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
