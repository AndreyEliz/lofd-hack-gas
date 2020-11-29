import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import {ColDef} from '@material-ui/data-grid';
import {deepOrange, deepPurple} from '@material-ui/core/colors'
import {ICV} from '../../store/models/cvModel';
import {Checkbox, Theme} from '@material-ui/core';
import {useLocation} from 'hooks/router.hooks';

interface ICustomGridProps {
    rows: any[],
    columns: any[],

    formatValue(row: ICV, col: any, classes: any): any
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 440,
    },
    orange: {
        color: theme.palette.getContrastText(deepOrange[500]),
        backgroundColor: deepOrange[500],
    },
    purple: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
    },
    blue: {
        color: theme.palette.getContrastText(theme.palette.info.main),
        backgroundColor: theme.palette.info.main,
    }
}));

const CustomGrid: React.FC<ICustomGridProps> = ({rows, columns, formatValue}) => {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const {navigate} = useLocation();

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const onSelectAllClick = () => {

    };

    const onRowSelect = () => {

    };

    const handleClick = (id: number) => {
        navigate(`/candidate/${id}`);
    };

    return (
        <Paper className={classes.root}>
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell padding="checkbox">
                                <Checkbox
                                    onChange={onSelectAllClick}
                                    inputProps={{'aria-label': 'select all'}}
                                />
                            </TableCell>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.field}
                                    align={column.align}
                                    style={{minWidth: column.minWidth}}
                                >
                                    {column.headerName}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                                    <TableCell>
                                        <Checkbox
                                            onChange={onRowSelect}
                                            inputProps={{'aria-label': 'select all'}}
                                        />
                                    </TableCell>
                                    {columns.map((column) => {
                                        const value = formatValue ? formatValue(row, column, classes) : row[column.field];
                                        return (
                                            <TableCell
                                                key={column.field}
                                                align={column.align}
                                                onClick={() => handleClick(row.id)}
                                            >
                                                {value}
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Paper>
    );
};

export default CustomGrid
