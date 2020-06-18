import React from 'react';
import {StyledTableCell, StyledTableRow} from "../StyledTable";
import {Redirect} from "react-router";

function BodyItem({ user, statistic }) {
    const redirect = () => {
        window.location = `/user/${user.id}`
    }
    return (
        <StyledTableRow key={user.id} onClick={() => redirect()}>
            <StyledTableCell component="th" scope="row">
                {user.id}
            </StyledTableCell>
            <StyledTableCell align="left">{user.first_name}</StyledTableCell>
            <StyledTableCell align="left">{user.last_name}</StyledTableCell>
            <StyledTableCell align="center">{user.email}</StyledTableCell>
            <StyledTableCell align="center">{user.gender}</StyledTableCell>
            <StyledTableCell align="center">{user.ip_address}</StyledTableCell>
            {statistic === undefined
                ? null
                :
                    <>
                        <StyledTableCell align="center">{statistic.clicks}</StyledTableCell>
                        <StyledTableCell align="center">{statistic.page_views}</StyledTableCell>
                    </>
            }

        </StyledTableRow>
    )
}

export default BodyItem;