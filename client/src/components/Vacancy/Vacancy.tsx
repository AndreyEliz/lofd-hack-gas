import React from 'react';
import { IJob } from 'store/models/jobModel';
import { useStyles } from './styles';
import { ClassNameMap } from '@material-ui/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {ILanguage} from "store/models/helpers";
import Chip from '@material-ui/core/Chip';
import CardCustom from "components/CardCustom/CardCustom";

interface IChipsField {
    classes: ClassNameMap<any>;
    options: string[];
    color?: 'primary' | 'secondary' | 'default';
}

interface IVacancyProps {
    data: IJob,
    defaultOpen?: boolean
}

const ChipsField = ({ classes, options, color = 'primary' }: IChipsField) => {
    return (
        <div className={classes.wrapperChips}>
            {options.map((option: string) => (
                <Chip
                    label={option}
                    color={color}
                    variant="outlined"
                    size="small"
                />
            ))}
        </div>
    );
};

const Vacancy: React.FC<IVacancyProps> = ({data, defaultOpen=true}) => {
    const classes = useStyles();

    const {
        title,
        summary,
        mainSkills,
        secondarySkills,
        skillLevel,
        type,
        salaryRate,
        languages,
        benefits
    } = data
    
    const salary = salaryRate ? `${salaryRate.from || '...'} ~ ${salaryRate.to || '...'} $` : '';
    const languagesList = languages && (
        <ChipsField classes={classes} options={languages.map(({name, level}: ILanguage) => `${name}: ${level.toLowerCase()}`)}/>
    );
    const mainSkillsList = mainSkills && <ChipsField classes={classes} options={mainSkills}/>;
    const secondarySkillsList = secondarySkills && <ChipsField classes={classes} options={secondarySkills} color='secondary'/>;
    const typeList = type && <ChipsField classes={classes} options={type.map((type: string) => `#${type}`)} color='default'/>;

    return (
        <CardCustom defaultOpen={defaultOpen} title={`${title} (${skillLevel}) ... ${salary}`}>
            <Grid container spacing={2} className={classes.mainGrid}>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography variant="body2" gutterBottom>
                                {typeList}
                                Описание: {summary}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">Основные скиллы: {mainSkillsList}</Typography>
                            <Typography variant="body2" color="textSecondary">
                                Будет плюсом следующие скиллы: {secondarySkillsList}
                            </Typography>
                            {languagesList && (
                                <Typography variant="body2" color="textSecondary">
                                    Иностранные языки: {languagesList}
                                </Typography>
                            )}
                            {benefits && (
                                <Typography variant="body2" color="textSecondary">
                                    Бонусы: {benefits}
                                </Typography>
                            )}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </CardCustom>
    );
};

export default Vacancy;
