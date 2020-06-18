import React from 'react';
import s from './WhyMe.module.scss';
import Grid from "@material-ui/core/Grid";


function WhyMe({title, desc, svg}) {

    return (
        <Grid
            className={s.item}
            item
            xs={10}
            md={3}
        >
            {svg}
            <p><b>{title }</b></p>
            <p>{ desc }</p>
        </Grid>
    )
}

export default WhyMe;