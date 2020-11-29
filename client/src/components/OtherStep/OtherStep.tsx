import CardCustom from "components/CardCustom/CardCustom";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {useStyles} from "./styles";
import { Button } from "@material-ui/core";
import { useLocation } from 'hooks/router.hooks';

interface IOtherStepVacancy {
    step: number;
    defaultOpen?: boolean;
}

const OtherStep = ({
    step,
    defaultOpen = true
}: IOtherStepVacancy) => {
    const classes = useStyles();
    const {navigate} = useLocation()

    return (
        <div className={classes.wrapper}>
            <CardCustom defaultOpen={defaultOpen} title={`Шаг ${step+1}`}>
                <Grid container spacing={2} className={classes.mainGrid}>
                    <Typography component="p"  variant="body2" color="textSecondary">
                        Прежде чем перейти к дальнейшим этапам, пожайлуйста пройдите небольшое тестовое задание
                    </Typography>
                    <Button style={{'display': 'block', 'margin': 10}} variant="outlined" color="primary" onClick={() => navigate('/sandbox')}>Перейти к заданию</Button>
                </Grid>
            </CardCustom>
        </div>
    );
};

export default OtherStep;
