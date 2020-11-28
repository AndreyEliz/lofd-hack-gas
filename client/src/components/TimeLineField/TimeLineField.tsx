import React, {useState, useEffect} from 'react';
import HorizontalTimeline from 'react-horizontal-timeline';
import './styles.css';

interface ITimeLineField {
    index: number;
    indexClick: (index: number) => void;
    values: string[];
}

const TimeLineField = ({ index, indexClick, values}: ITimeLineField) => {
    return (
        <div
            style={{
                width: '800px',
                height: '100px',
                margin: '0 auto',
                backgroundColor: '#ff000'
            }}
        >
            <HorizontalTimeline
                index={index}
                indexClick={indexClick}
                values={values}
                styles={{
                    background: '#f8f8f8',
                    foreground: '#03a9f4',
                    outline: '#bdbdbd'
                }}
                isOpenBeginning={false}
                isOpenEnding={false}
                linePadding={85}
                minEventPadding={50}
                maxEventPadding={50}
                getLabel={(value: string) => value}
            />
        </div>
    );
};

export default TimeLineField;
