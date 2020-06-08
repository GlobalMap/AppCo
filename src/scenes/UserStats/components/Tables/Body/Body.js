import React from 'react';
import { TableBody } from "@material-ui/core";
import {StyledTableCell, StyledTableRow} from "../StyledTable";

function Body() {
    return (
        <TableBody>
            <StyledTableRow>
                <StyledTableCell component="th" scope="row">
                        {"row.name"}
                </StyledTableCell>
                <StyledTableCell align="right">{"row.calories"}</StyledTableCell>
                <StyledTableCell align="right">{"row.fat"}</StyledTableCell>
                <StyledTableCell align="right">{"row.carbs"}</StyledTableCell>
                <StyledTableCell align="right">{"row.protein"}</StyledTableCell>
                <StyledTableCell align="right">{"row.calories"}</StyledTableCell>
                <StyledTableCell align="right">{"row.fat"}</StyledTableCell>
                <StyledTableCell align="right">{"row.carbs"}</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell component="th" scope="row">
                    {"row.name"}
                </StyledTableCell>
                <StyledTableCell align="right">{"row.calories"}</StyledTableCell>
                <StyledTableCell align="right">{"row.fat"}</StyledTableCell>
                <StyledTableCell align="right">{"row.carbs"}</StyledTableCell>
                <StyledTableCell align="right">{"row.protein"}</StyledTableCell>
                <StyledTableCell align="right">{"row.calories"}</StyledTableCell>
                <StyledTableCell align="right">{"row.fat"}</StyledTableCell>
                <StyledTableCell align="right">{"row.carbs"}</StyledTableCell>
            </StyledTableRow>
        </TableBody>
    )
}

export default Body;