import * as React from 'react';
import Paper from "@material-ui/core/Paper";

export const ChatBubble = ({mainBubble = false, author, message, timestamp}) => {
    const secondaryBubbleStyle = {backgroundColor: '#EEF3ED', maxWidth: '60%', margin: '1rem', padding: '1rem'};
    const mainBubbleStyle = {backgroundColor: '#E6F066', maxWidth: '60%', margin: '1rem', padding: '1rem', marginLeft: 'auto'};
    const d = new Date(timestamp);
    const date = d.toDateString() + ' ' + d.getHours() + ':' + d.getMinutes();

    return (
        <Paper elevation={ 4 } style={ mainBubble ? mainBubbleStyle : secondaryBubbleStyle }>
            <div style={ {color: '#8C928B', textAlign: 'left'} }>{ author }</div>
            <div style={ {textAlign: 'left'} }>{ message }</div>
            <div style={ {color: '#8C928B', textAlign: 'left'} }>{ date }</div>
        </Paper>
    )
};
