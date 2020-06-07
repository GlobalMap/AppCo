import React from 'react';
import s from './Input.module.scss';

function Input() {
    return (
        <div className={s.main}>
            <input type="text" placeholder="Enter your email"/>
            <button>Subscribe</button>
        </div>
    )

}

export default Input;