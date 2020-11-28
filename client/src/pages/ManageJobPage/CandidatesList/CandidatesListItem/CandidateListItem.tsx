import React from 'react';
import CardCustom from 'components/CardCustom/CardCustom';
import { CardContent } from '@material-ui/core';
import { ICV } from 'store/models/cvModel';
import { useStyles } from './styles';

interface ICandidateListItemProps {
    data: ICV
}

const CandidateListItem: React.FC<ICandidateListItemProps> = ({data}) => {
    const classes = useStyles()

    return (
        <CardCustom title={data.fio} collapsable={false}>
            <CardContent ></CardContent>
        </CardCustom>
    );
}

export default CandidateListItem;