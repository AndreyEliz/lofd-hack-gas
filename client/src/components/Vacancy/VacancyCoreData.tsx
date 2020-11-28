import React from 'react';
import { IJob } from 'store/models/jobModel';
import Typography from '@material-ui/core/Typography';
import {ILanguage} from "store/models/helpers";
import ChipsField from 'components/ChipsField/ChipsField';
import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    wrapper: {
        marginTop: 10,
        marginBottom: 10,
    }
}));

interface IVacancyCoreDataProps {
    data: IJob
}

const VacancyCoreData: React.FC<IVacancyCoreDataProps> = ({data}) => {
    const classes = useStyles()

    return (
    <div className={classes.wrapper}>
        <div className={classes.wrapper}>
            <Typography variant="body2" color="textSecondary">Основные скиллы:</Typography>
            {data.mainSkills && <ChipsField options={data.mainSkills}/>}
        </div>
        <div className={classes.wrapper}>
            <Typography variant="body2" color="textSecondary">
                Будет плюсом следующие скиллы:
            </Typography>
            {data.secondarySkills && <ChipsField options={data.secondarySkills} color='secondary'/>}
        </div>
        {data.languages && (
            <div className={classes.wrapper}>
                <Typography variant="body2" color="textSecondary">
                    Иностранные языки:
                </Typography>
                <ChipsField options={data.languages.map(({name, level}: ILanguage) => `${name}: ${level.toLowerCase()}`)}/>
            </div>
        )}
    </div>
    );
};

export default VacancyCoreData;
