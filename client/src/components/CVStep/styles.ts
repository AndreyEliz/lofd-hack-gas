import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    wrapper: {
        display: 'inline-block',
        width: '100%',
    },
    input: {
        display: 'block',
        width: 600,
        marginTop: 10,
        marginBottom: 10,
    },
    submitBtn: {
        display: 'block',
        width: 200,
        marginTop: 10,
        marginBottom: 10,
    }
}));
