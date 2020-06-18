import { withStyles } from "@material-ui/core/styles";
import { TableCell, TableRow } from "@material-ui/core";

export const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: "#3A80BA",
        color: theme.palette.common.white,
        borderRight: "solid 1px #fff"
    },
    body: {
        fontSize: 16,

    },
}))(TableCell);

export const StyledTableRow = withStyles((theme) => ({
    root: {
        cursor: 'pointer',
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);
