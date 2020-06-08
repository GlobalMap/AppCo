import React from "react";
import { Link } from "react-router-dom";
import s from './Block1.module.scss';
import { background, mobile } from "../../../components/svg/svg";
import Header from "../../../components/Header/Header";

function Block1() {
    return (
        <div className={s.block}>
            <Header />
            <div className={s.bgBlue}>
                { background }
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
                { mobile }
            </div>
        </div>
    )
}

export default Block1;