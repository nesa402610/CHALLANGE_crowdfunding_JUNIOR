import React from 'react';
import BlockActions from "./blockActions";

const Block = ({left, btn, children}) => {
    return (
        <div className={'aboutBlock' + (btn ? ' disabled' : '')}>
            {children}
            <BlockActions left={left} btn={btn}/>
        </div>
    );
};

export default Block;