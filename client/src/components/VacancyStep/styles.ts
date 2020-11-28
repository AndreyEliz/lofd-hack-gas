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
    uploadButton: {
        float: 'right',
        marginRight: theme.spacing(4),
        marginBottom: theme.spacing(2),
    }
}));
