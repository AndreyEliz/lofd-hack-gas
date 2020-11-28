import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    candidatesCount: {
        color: theme.palette.info.dark
    },
    candidatesWraper: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
}));
