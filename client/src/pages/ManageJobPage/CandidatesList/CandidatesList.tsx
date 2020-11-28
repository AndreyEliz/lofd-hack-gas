import React from 'react';
import { useSelector } from 'react-redux';
import CardCustom from 'components/CardCustom/CardCustom';
import { Avatar, Button, CardContent } from '@material-ui/core';
import { useParams } from 'hooks/router.hooks';
import { selectCandidatesList } from 'reducers/candidates.reducer';
import { ICV } from 'store/models/cvModel';
import { useStyles } from './styles';
import { ColDef } from '@material-ui/data-grid';
import CustomGrid from 'components/CustomGrid/CustomGrid';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { deepOrange, deepPurple } from '@material-ui/core/colors'
import LinearWithValueLabel from 'components/Progress/Progress';

const columns: ColDef[] = [
    { field: 'fio', headerName: 'ФИО', width: 130 },
    { field: 'label', headerName: 'Позиция', width: 200 },
    { field: 'area', headerName: 'Область', width: 130,},
    { field: 'dateOfBirth', headerName: 'Возраст',  width: 160,},
    { field: 'source', headerName: 'Ресурс',  width: 130, },
    { field: 'quality', headerName: 'Соответствие',  width: 130, },
    { field: 'status', headerName: 'Статус',  width: 130, }
];

const formatCell = (row:any, col:any) => {
    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            orange: {
                color: theme.palette.getContrastText(deepOrange[500]),
                backgroundColor: deepOrange[500],
            },
            purple: {
                color: theme.palette.getContrastText(deepPurple[500]),
                backgroundColor: deepPurple[500],
            },
            blue: {
                color: theme.palette.getContrastText(theme.palette.info.main),
                backgroundColor: theme.palette.info.main,
            }
        }),
    );
    const classes = useStyles();

    const data = row[col.field]
    if (col.field=== 'source') {
        return (
        <>
            {(data === 'ГазПромБанк') && <Avatar className={classes.blue} variant="rounded">Гб</Avatar>}
            {(data === 'HH') && <Avatar className={classes.orange} variant="rounded">Hh</Avatar>}
            {(data === 'LinkedIn') && <Avatar className={classes.purple} variant="rounded">Li</Avatar>}
        </>)
    }
    if (col.field=== 'quality') {
        const value: number = row.quality
        return (
        <LinearWithValueLabel progress={value}/>)
    }
    return data
}
  

const CandidateList: React.FC = () => {
    const {id} = useParams()
    const classes = useStyles()
    const candidates: ICV[] = useSelector(selectCandidatesList)
    const internalCandidates = candidates.filter((candidate) => candidate.internal)
    const externalCandidates = candidates.filter((candidate) => !candidate.internal)

    return (
        <div>
            <CardCustom title="Подходящие сотрудники компании" defaultOpen={false}>
                <CardContent className={classes.candidatesWraper}>
                    Фильтрация: пока не реализовано
                    <CustomGrid rows={internalCandidates} columns={columns} formatValue={formatCell}/>
                </CardContent>
            </CardCustom>
            <CardCustom title="Подходящие соискатели" defaultOpen={false}>
                <CardContent className={classes.candidatesWraper}>
                    Фильтрация: пока не реализовано
                    <CustomGrid rows={externalCandidates} columns={columns} formatValue={formatCell} />
                </CardContent>
                <Button
                    className={classes.actionButtons}
                    variant="contained"
                    size="small"
                    color="primary"
                >
                    Отправить приглашение
                </Button>
            </CardCustom>
        </div>
    );
}

export default CandidateList;