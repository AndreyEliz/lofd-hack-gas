import { makeStyles, Theme } from '@material-ui/core/styles';
import { IJob } from '../../../store/models/jobModel';

export const useStyles = makeStyles((theme: Theme) => ({
    jobWrapper: {
        width: 700
    },
    candidatesCount: {
        color: theme.palette.info.dark
    },
    avatar: {
        backgroundColor: (data: IJob) => {
            if (data.status === 'new') return theme.palette.success.main;
            if (data.status === 'open') return theme.palette.warning.main;
            if (data.status === 'closed') return theme.palette.grey[500];
            if (data.status === 'published') return theme.palette.info.main;
        }
    },
    cardContent: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    jobSummary: {},
    jobActions: {},
    actionButtons: {
        margin: 5
    }
}));
