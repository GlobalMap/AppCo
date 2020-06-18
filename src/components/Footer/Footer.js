import React, {useEffect, useState} from 'react';
import s from './Footer.module.scss';
import Logo from "../Logo/Logo";
import Input from "./components/Input/Input";
import Svg from "../svg/SvgIcon";

function Footer({main}) {
    const [background, setBackground] = useState({})
    useEffect(() => {
        if(!main) {
            setBackground({background: "#1C3B55", top: "1.5em"})
        }
    }, [])

    return (
        <footer>
            <div className={s.main} style={background}>
                <Logo />
                <span>All rights reserved by ThemeTags</span>
                <span>Copyrights © 2019. </span>
            </div>
            {main
                ? (
                    <>
                    <Input />
                    <Svg name="backgroundFooter" />
                    </>
                )
                : null
            }
        </footer>
    )
}

export default Footer;