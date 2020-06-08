import React from 'react';
import { TableHead, TableCell, TableRow} from "@material-ui/core";
import {StyledTableCell} from "../StyledTable";

function Head() {
    return (
        <TableHead>
            <TableRow>
                <StyledTableCell>Id</StyledTableCell>
                <StyledTableCell>First name</StyledTableCell>
                <StyledTableCell>Last name</StyledTableCell>
                <StyledTableCell>Email</StyledTableCell>
                <StyledTableCell>Gender</StyledTableCell>
                <StyledTableCell>IP address</StyledTableCell>
                <StyledTableCell>Total clicks</StyledTableCell>
                <StyledTableCell>Total page views</StyledTableCell>
            </TableRow>
        </TableHead>
    )
}

export default Head;