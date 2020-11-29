import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    loaderWrapper: {
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        height: 500,
        width: '100%'
    },
    loader:{
        margin: 100
    }
}));
