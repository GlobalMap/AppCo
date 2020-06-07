import React from 'react';


function WhyMe({title, desc, svg}) {

    return (
        <div>
            {svg}
            <p><b>{title }</b></p>
            <p>{ desc }</p>
        </div>
    )
}

export default WhyMe;