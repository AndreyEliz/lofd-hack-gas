import CardCustom from "components/CardCustom/CardCustom";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {useStyles} from "./styles";

interface IOtherStepVacancy {
    step: number;
    defaultOpen?: boolean;
}

const OtherStep = ({
    step,
    defaultOpen = true
}: IOtherStepVacancy) => {
    const classes = useStyles();

    return (
        <div className={classes.wrapper}>
            <CardCustom defaultOpen={defaultOpen} title={`Шаг ${step+1}`}>
                <Grid container spacing={2} className={classes.mainGrid}>
                    <Typography component="div"  variant="body2" color="textSecondary">
                        Контент данного шага в стадии разработки
                    </Typography>
                </Grid>
            </CardCustom>
        </div>
    );
};

export default OtherStep;
