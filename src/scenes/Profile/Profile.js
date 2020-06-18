import React, {useEffect} from "react";
import {connect} from 'react-redux';
import {useParams} from "react-router";
import moment  from 'moment';
import {CartesianGrid, Legend, LineChart, Tooltip, XAxis, YAxis, Line} from "recharts";
import s from './Profile.module.scss'
import Header from "../../components/Header/Header";
import {getStatisticOneUser, getUser, getUserStatistic} from "../../reducer/reducer";
import fetchUserByIdAction from "../../actions/getUserById";
import NavLinksAndTitle from "../../components/NavLinks/NavLinksAndTitle";
import fetchStatisticOneUserAction from "../../actions/fetchStatisticOneUser";
import Footer from "../../components/Footer/Footer";

function Profile({ user, statisticUser, fetchUser, fetchStatisticOneUser }) {
    const { id } = useParams();
    const widthChart = window.screen.width - 200

    useEffect(() => {
        fetchUser(id);
        fetchStatisticOneUser(id);
    },[])

    const dateFormat = (tickItem) => {
        return moment(tickItem).format('MMMM');
    }

    console.log(statisticUser)
    return (
        <>
            <Header bg="#3A80BA"  />
            <div className={s.statistic}>
                <NavLinksAndTitle
                    title={`${user.first_name} ${user.last_name}`}
                    page={{stat: false, user: false}}
                    userName={`${user.first_name} ${user.last_name}`}
                />

                <div className={s.diagrams}>
                    <div className={s.clicks}>
                        <p className={s.title}>Clicks</p>

                        <LineChart width={widthChart} height={250} data={statisticUser}>
                            <XAxis dataKey="date" tickFormatter={dateFormat} />
                            <YAxis dataKey="clicks" />
                            <Tooltip />
                            <Line type="monotone" dataKey="clicks" stroke="#3A80BA" />
                        </LineChart>
                    </div>
                    <div className={s.views}>
                        <p className={s.title}>Views</p>

                        <LineChart width={widthChart} height={250} data={statisticUser}>
                            <XAxis dataKey="date" tickFormatter={dateFormat} />
                            <YAxis dataKey="page_views" />
                            <Tooltip />
                            <Line type="monotone" dataKey="page_views" stroke="#3A80BA" />
                        </LineChart>
                    </div>
                </div>
            </div>
            <Footer main={false} />
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUser: (id) => dispatch(fetchUserByIdAction(id)),
        fetchStatisticOneUser: (id) => dispatch(fetchStatisticOneUserAction(id))
    }
}

const mapStateToProps = (state) => {
    return {
        user: getUser(state),
        statisticUser: getStatisticOneUser(state),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);