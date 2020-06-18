import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import s from './Block1.module.scss';
import Header from "../../../components/Header/Header";
import Svg from "../../../components/svg/SvgIcon";
import Grid from "@material-ui/core/Grid";

function Block1() {
    const theme = useTheme();
    const matchLGsize = window.screen.width > 1280 && window.screen.width < 1920
    const matchXLsize = window.screen.width > 1920

    const adaptiveMobile = () => {
        if (matchLGsize) {
            return 300;
        }
        if (matchXLsize) {
            return 500;
        }
    }

    return (
        <Grid className={s.block}>
            <Header />
            <div className={s.bgBlue}>
                <Svg name="background" />
            </div>
            <div className={s.text}>
                <p className={s.title}>
                    <b>Brainstorming</b> for desired perfect Usability
                </p>
                <p className={s.decription}>
                    Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!
                </p>
                <Link to="/stats">
                    <button className={s.button}>
                        Views Stats
                    </button>
                </Link>
            </div>
            <div className={s.mobile}>
                <Svg name="mobile" />
            </div>
        </Grid>
    )
}

export default Block1;