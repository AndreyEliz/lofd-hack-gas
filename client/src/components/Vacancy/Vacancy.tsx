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
    id: string;
}

interface IVacancyProps {
    data: IJob
}

const ChipsField = ({ classes, options, color = 'primary', id }: IChipsField) => {
    return (
        <div className={classes.wrapperChips}>
            {options.map((option: string, idx: number) => (
                <Chip
                    key={`chip-${id}-${idx}`}
                    label={option}
                    color={color}
                    variant="outlined"
                    size="small"
                />
            ))}
        </div>
    );
};

const Vacancy: React.FC<IVacancyProps> = ({data}) => {
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
    } = data;

    const salary = salaryRate ? `${salaryRate.from || '...'} ~ ${salaryRate.to || '...'} руб.` : '';
    const languagesList = languages && (
        <ChipsField id='languages' classes={classes} options={languages.map(({name, level}: ILanguage) => `${name}: ${level.toLowerCase()}`)}/>
    );
    const mainSkillsList = mainSkills && <ChipsField id='main-skillss' classes={classes} options={mainSkills}/>;
    const secondarySkillsList = secondarySkills && <ChipsField id='secondary-skills' classes={classes} options={secondarySkills} color='secondary'/>;
    const typeList = type && <ChipsField id='types' classes={classes} options={type.map((type: string) => `#${type}`)} color='default'/>;

    return (
        <CardCustom title={`${title} (${skillLevel}) ... ${salary}`}>
            <Grid container spacing={2} className={classes.mainGrid}>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography variant="body2" gutterBottom>
                                {typeList}
                                <div dangerouslySetInnerHTML={{ __html: summary }} />
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
                                    Бонусы: <div dangerouslySetInnerHTML={{ __html: benefits }} />
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
