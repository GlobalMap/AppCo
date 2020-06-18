import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import s from './UserStats.module.scss';
import Header from "../../components/Header/Header";
import Tables from "./components/Tables/Tables";
import fetchUsersAction from "../../actions/fetchUsers";
import ReactPaginate from 'react-paginate';
import Svg from "../../components/svg/SvgIcon";
import Footer from "../../components/Footer/Footer";
import fetchUsersStatisticAction from "../../actions/fetchUsersStatistic";
import NavLinksAndTitle from "../../components/NavLinks/NavLinksAndTitle";

function UserStats({ fetchUsers, total }) {

    useEffect(() => {
        fetchUsers(1);
    }, [])

    const onChange = (page) => {
        fetchUsers(page.selected + 1);
    }


    return (
       <>
           <Header bg="#3A80BA" />
           <div className={s.table}>
               <NavLinksAndTitle
                   title="Users statistics"
                   page={{stat: true}}
               />
               <Tables />
           </div>

           <ReactPaginate
               containerClassName="pagination"
               activeClassName="active"
               nextClassName="next"
               previousClassName="previous"
               previousLabel={<Svg name="paginateIconPrev" color="#3A80BA" />}
               nextLabel={<Svg name="paginateIconNext" color="#3A80BA" />}
               pageCount={Math.ceil(total / 50)}
               pageRangeDisplayed={2}
               marginPagesDisplayed={1}
               onPageChange={(page) => onChange(page)}
           />
           <Footer main={false} />
       </>

    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: (page) => dispatch(fetchUsersAction(page))
    }
}

const mapStateToProps = state => {
    return {
        total: state.users.total
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UserStats);