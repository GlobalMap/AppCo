import React, {useState} from 'react';
import {getUsers, getUserStatistic} from "../../../../../reducer/reducer";
import {connect} from "react-redux";
import { TableBody } from "@material-ui/core";
import BodyItem from "./BodyItem";

function Body({ users, statistic }) {
    const [clicks, setClicks] = useState(0);
    const [views, setViews] = useState(0);
    return (
        <TableBody>
            {users.data === undefined
                ? null
                :
                    users.data.map(user => {
                        const findStatistic = statistic.find(e => e.user_id === user.id)
                        return (
                            <BodyItem key={user.id} statistic={findStatistic} user={user} />
                        )
                    })
            }
        </TableBody>
    )
}

const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        statistic: getUserStatistic(state)
    }
}

export default connect(mapStateToProps)(Body);