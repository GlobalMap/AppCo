import React from 'react';
import { TableContainer, Table, Paper} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Head from "./Head/Head";
import Body from "./Body/Body";


function Tables() {

    return (
        <>
            <TableContainer  component={Paper}>
                <Table>
                    <Head />
                    <Body />
                </Table>
            </TableContainer>
        </>
        )
}


export default Tables;