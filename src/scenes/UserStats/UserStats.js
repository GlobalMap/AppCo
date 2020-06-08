import React from 'react';
import s from './UserStats.module.scss';
import Header from "../../components/Header/Header";
import Tables from "./components/Tables/Tables";

function UserStats() {
    return (
       <>
           <Header bg="#3A80BA" />
           <div className={s.table}>
               <h1 className={s.title}>Users statistics</h1>
               <Tables />
           </div>

       </>
    )
}

export default UserStats;