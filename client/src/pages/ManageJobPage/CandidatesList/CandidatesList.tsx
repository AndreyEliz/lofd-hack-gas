import React from 'react';
import { useSelector } from 'react-redux';
import CardCustom from 'components/CardCustom/CardCustom';
import { CardContent } from '@material-ui/core';
import { useParams } from 'hooks/router.hooks';


const CandidateList: React.FC = () => {
    const {id} = useParams()

    return (
        <div>
            <CardCustom title="Кандидаты">
                <CardContent>
                    
                </CardContent>
            </CardCustom>
        </div>
    );
}

export default CandidateList;