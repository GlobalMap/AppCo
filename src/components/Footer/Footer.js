import React from 'react';
import s from './Footer.module.scss';
import Logo from "../Logo/Logo";
import {backgroundFooter} from "../svg/svg";
import Input from "./components/Input/Input";

function Footer({main}) {
    return (
        <footer>

            <div className={s.main}>
                <Logo />
                <span>All rights reserved by ThemeTags</span>
                <span>Copyrights © 2019. </span>
            </div>
            {main
                ? (
                    <>
                    <Input />
                    {backgroundFooter}
                    </>
                )
                : null
            }
        </footer>
    )
}

export default Footer;