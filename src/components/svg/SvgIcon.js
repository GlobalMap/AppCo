import React from 'react';
import T from 'prop-types';
import { SvgConfig } from "./svg";


function Svg({name, ...props}) {
    const SvgC = SvgConfig[name];
    return <SvgC { ...props } />
}

Svg.propTypes = {
    name: T.string.isRequired,
    color: T.string
}

export default Svg;