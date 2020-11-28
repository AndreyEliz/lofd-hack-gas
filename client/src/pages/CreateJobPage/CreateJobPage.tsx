import React from 'react';
import { IJob } from 'store/models/jobModel';
import { useForm } from "react-hook-form";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import ReactHookFormSelect from 'components/form/Select/ReactHookFormSelect';
import { useStyles } from './styles';
import { WorkType } from 'store/models/helpers';
import { SKILL_LEVELS, WORK_TYPES } from 'constants/constants';
import ReactHookFormRTE from 'components/form/ReachEditor/ReactHookFormRTE';
import { SKILLS } from 'constants/constants';
import RHFSelectAutocomplete from '../../components/form/Select/RHFSelectAutocomplete';
import CardCustom from 'components/CardCustom/CardCustom';
import { CardContent } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { addNewJob } from 'actions/jobs.actions';

type Inputs = {
    title: string,
    skillLevel: string,
    type: WorkType[],
    summary: string,
    mainSkills: string[],
    secondarySkills: string[]
};

const skillLevels = SKILL_LEVELS.map((item:string) => <MenuItem key={item} value={item}>{item}</MenuItem>);
const workTypes = WORK_TYPES.map((item:string) => <MenuItem key={item} value={item}>{item}</MenuItem>);

const CreateJobPage: React.FC = () => {
    const [newJob, setNewJob] = React.useState<IJob | null>(null);
    const { register, handleSubmit, errors, control } = useForm<Inputs>();
    const classes = useStyles();
    const dispatch = useDispatch();

    const onSubmit = (data:Inputs) => {
console.log('▓▓▓create job:', data);
        dispatch(addNewJob({
            ...data,
            status: 'new',
            activeCandidates: 0,
            passedCandidates: 0,
            id:0
        }))
    };

    return (
        <CardCustom title="Подать заявку">
            <CardContent>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormControl className={classes.input}>
                        <TextField
                            label={'Вакансия'}
                            inputRef={register({ required: true })}
                            name="title"
                            variant="outlined"
                            fullWidth
                        />
                    </FormControl>
                    <ReactHookFormSelect
                        className={classes.input}
                        name="skillLevel"
                        label="Уровень"
                        defaultValue="Middle"
                        variant="outlined"
                        control={control}
                    >
                        {skillLevels}
                    </ReactHookFormSelect>
                    <ReactHookFormSelect
                        className={classes.input}
                        name="type"
                        label="Tип занятости"
                        defaultValue={['Remote']}
                        variant="outlined"
                        selectProps={{multiple: true}}
                        control={control}
                    >
                        {workTypes}
                    </ReactHookFormSelect>
                    <RHFSelectAutocomplete
                        className={classes.input}
                        name="mainSkills"
                        label="Ключевые навыки"
                        defaultValue={[]}
                        variant="outlined"
                        options={SKILLS}
                        control={control}
                    />
                    <RHFSelectAutocomplete
                        className={classes.input}
                        name="secondarySkills"
                        label="Желательно также"
                        defaultValue={[]}
                        variant="outlined"
                        options={SKILLS}
                        control={control}
                    />
                    <ReactHookFormRTE
                        name="summary"
                        label="Дополнительная информация"
                        control={control}
                        defaultValue=""
                    />
                    <Button
                        className={classes.submitBtn}
                        type="submit"
                        variant="contained"
                        color="primary"
                    >
                        Подтвердить
                    </Button>
                </form>
            </CardContent>
        </CardCustom>
    );
};

export default CreateJobPage;
