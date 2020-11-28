import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    wrapperChips: {
        display: 'flex',
        // justifyContent: 'center',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(0.5),
        },
    },
    mainGrid: {
        padding: theme.spacing(2),
    },
    // paper: {
    //     padding: theme.spacing(2),
    //     margin: 'auto',
    //     // maxWidth: 500,
    //     maxWidth: '90%',
    // },
    // image: {
    //     width: 128,
    //     height: 128,
    // },
    // img: {
    //     margin: 'auto',
    //     display: 'block',
    //     maxWidth: '100%',
    //     maxHeight: '100%',
    // },
}));
