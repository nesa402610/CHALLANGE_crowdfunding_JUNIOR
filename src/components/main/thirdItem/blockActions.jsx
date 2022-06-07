import React from 'react';

const BlockActions = ({left, btn}) => {
    return (
        <div className={'aboutBlock__actions'}>
            <div className={'head'}>
                <h2>{left}&nbsp;&nbsp;</h2>
                <span>left</span>
            </div>
            <div className={'button' + (btn ? ' disabled' : '')}>
                {btn ? btn : 'Select Reward'}
            </div>
        </div>
    );
};

export default BlockActions;