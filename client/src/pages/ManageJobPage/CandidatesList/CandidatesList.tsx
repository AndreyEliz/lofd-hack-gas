import React from 'react';
import { useSelector } from 'react-redux';
import { Avatar, Button } from '@material-ui/core';
import { selectCandidatesList } from 'reducers/candidates.reducer';
import { ICV } from 'store/models/cvModel';
import { useStyles } from './styles';
import { ColDef } from '@material-ui/data-grid';
import CustomGrid from 'components/CustomGrid/CustomGrid';
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

const formatCell = (row:any, col:any, classes:any) => {
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
  

export const ExternalCandidates = () => {
    const candidates: ICV[] = useSelector(selectCandidatesList)
    const externalCandidates = candidates.filter((candidate) => !candidate.internal)
    const classes = useStyles()

    return (
        <>
            Фильтрация: пока не реализовано
            <CustomGrid rows={externalCandidates} columns={columns} formatValue={formatCell} />
            <Button
                className={classes.actionButtons}
                variant="contained"
                size="small"
                color="primary"
            >
                Отправить приглашение
            </Button>
        </>
    );
}

export const InternalCandidates = () => {
    const candidates: ICV[] = useSelector(selectCandidatesList)
    const internalCandidates = candidates.filter((candidate) => candidate.internal)

    return (
        <>
            Фильтрация: пока не реализовано
            <CustomGrid rows={internalCandidates} columns={columns} formatValue={formatCell}/>
        </>
    );
}
