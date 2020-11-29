import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    wrapper: {
        display: 'inline-block',
        width: '100%',
    },
    mainGrid: {
        padding: theme.spacing(2),
    },
    wrapperFirstField: {
        marginBottom: 10,
    },
    wrapperField: {
        marginTop: 10,
        marginBottom: 10,
    },
    confirmButton: {
        float: 'right',
        marginRight: theme.spacing(4),
        marginBottom: theme.spacing(2),
    },
    jobsWrapper: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    }
}));
