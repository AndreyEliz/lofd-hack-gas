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
import { SKILLS } from '../../constants/constants';
import RHFSelectAutocomplete from '../../components/form/Select/RHFSelectAutocomplete';

type Inputs = {
    title: string,
    skillLevel: string,
    workType: WorkType[],
    summaryRTE: string[],
    keySkills: string[],
    secondarySkills: string[]
};

const skillLevels = SKILL_LEVELS.map((item:string) => <MenuItem key={item} value={item}>{item}</MenuItem>)
const workTypes = WORK_TYPES.map((item:string) => <MenuItem key={item} value={item}>{item}</MenuItem>)

const CreateJobPage: React.FC = () => {
    const [newJob, setNewJob] = React.useState<IJob | null>(null)
    const { register, handleSubmit, errors, control } = useForm<Inputs>();
    const classes = useStyles()

    const onSubmit = (data:any) => console.log(data);
 
    return (
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
            name="workType"
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
            name="keySkills"
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
            name="summaryRTE"
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
    );
}

export default CreateJobPage;