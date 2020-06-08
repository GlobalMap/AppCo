import React from "react";
import { Link } from "react-router-dom";
import './Header.module.scss';
import Logo from "../Logo/Logo";

function Header({ bg }) {
    return (
        <header style={{background: bg}}>
            <Link to="/">
                <Logo />
            </Link>
        </header>
    )
}

Header.defaultProps = {
    bg: "linear-gradient(92.09deg, #255D8B 2.29%, #3A80BA 96.79%)"
}

export default Header;