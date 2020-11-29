import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IJob } from 'store/models/jobModel';
import { selectJobList } from 'reducers/jobList.reducer';
import { useParams } from 'hooks/router.hooks';
import VacancyCoreData from 'components/VacancyStep/VacancyCoreData';
import Typography from '@material-ui/core/Typography';
import ChipsField from 'components/ChipsField/ChipsField';
import { ExternalCandidates } from './CandidatesList/CandidatesList';
import Button from '@material-ui/core/Button';
import { makeStyles, Theme } from '@material-ui/core/styles';
import PublicIcon from '@material-ui/icons/Public';
import EditIcon from '@material-ui/icons/Edit';
import { getAllCandidatesList } from 'actions/candidates.actions';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import { InternalCandidates } from './CandidatesList/CandidatesList';

export const useStyles = makeStyles((theme: Theme) => ({
    actionButtons: {
        margin: 5
    },
    tabPane: {
        padding: 20
    }
}));

interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
  }

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <div>
            {children}
          </div>
        )}
      </div>
    );
  }

  function a11yProps(index: any) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }


const ManageJobPage: React.FC = () => {
    const classes = useStyles()
    const {id} = useParams()
    const vacancy: IJob = useSelector(selectJobList).find((job:IJob) => job.id == id)
    const dispatch = useDispatch()
    React.useEffect(() => {
        dispatch(getAllCandidatesList())
    }, [dispatch])

    const [value, setValue] = React.useState(2);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div>
            <Paper square>
                <Tabs
                    variant="fullWidth"
                    value={value}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={handleChange}
                    aria-label="job"
                >
                    <Tab label={`${vacancy.title} - ${vacancy.skillLevel}`} {...a11yProps(0)} />
                    <Tab label="Подходящие сотрудники компании" {...a11yProps(1)} />
                    <Tab label="Подходящие соискатели" {...a11yProps(2)}/>
                </Tabs>
                {value === 0 &&<div className={classes.tabPane}>
                    <TabPanel value={value} index={0} >
                        <Button
                            className={classes.actionButtons}
                            variant="contained"
                            size="small"
                            color="primary"
                            startIcon={<EditIcon />}
                        >
                            Редактировать
                        </Button>
                        <Button
                            className={classes.actionButtons}
                            variant="contained"
                            size="small"
                            color="primary"
                            startIcon={<PublicIcon />}
                        >
                            Опубликовать
                        </Button>
                        {vacancy.type &&
                        <div>
                            <ChipsField options={vacancy.type.map((type: string) => `#${type}`)} color='default'/>
                            <div dangerouslySetInnerHTML={{ __html: vacancy.summary }} />
                        </div>}
                        <VacancyCoreData data={vacancy}/>
                        {vacancy.benefits &&
                        <div>
                            <Typography component="div"  variant="body2" color="textSecondary">
                                Бонусы:
                            </Typography>
                            <div dangerouslySetInnerHTML={{ __html: vacancy.benefits }} />
                        </div>}
                    </TabPanel>
                </div>}
                {value ==1 && <div className={classes.tabPane}>
                    <TabPanel value={value} index={1}>
                        <InternalCandidates/>
                    </TabPanel>
                </div>}
                {value ==2 && <div className={classes.tabPane}>
                <TabPanel value={value} index={2}>
                    <ExternalCandidates/>
                </TabPanel>
                </div>}
            </Paper>
        </div>
    );
}

export default ManageJobPage;
