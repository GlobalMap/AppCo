import React from "react";
import s from './NavLinksAndTitle.module.scss';
import {Link} from "react-router-dom";

function NavLinksAndTitle({ title, page = {stat: false, user: false}, ...props }) {
    return (
        <>
            <p className={s.links}>
                <span>
                    <Link to={"/"}>
                        Main Page
                    </Link>
                </span>
                <span> > </span>

                {page.stat
                           ?
                           (
                               <>
                                   <span className={s.active}>
                                       User Statistic
                                   </span>
                               </>
                           )
                           :
                           (
                               <>
                                   <Link to={"/stats"}>
                                       <span style={{marginRight: "0.5em"}}>User Statistic</span>
                                   </Link>
                                   <span> > </span>
                                   <span className={s.active}>{props.userName}</span>
                               </>
                           )
                       }
            </p>
            <h1 className={s.title}>
                {page.stat
                    ? title
                    : props.userName
                }
            </h1>
        </>
    )
}

export default NavLinksAndTitle;