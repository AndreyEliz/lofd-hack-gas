import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    jobsWrapper: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    filters:{
        width: 1360
    },
    gridCard: {
        padding: 0,
        width: 1360
    },
    gridCardContent: {
        height: 500,
        width: '100%',
        padding:0
    }
}));
