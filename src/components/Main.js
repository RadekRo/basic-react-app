import React from 'react';
import {Link} from 'react-router-dom';
import Players from '../data/PlayersList';

import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn
} from 'material-ui/Table';

export default () => {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHeaderColumn>No.</TableHeaderColumn>
                    <TableHeaderColumn>Name</TableHeaderColumn>
                    <TableHeaderColumn>Skills</TableHeaderColumn>
                </TableRow>
            </TableHeader>
            <TableBody>
                { Players.map(player =>
                    <TableRow>
                        <TableRowColumn>
                            { player.id }
                        </TableRowColumn>
                        <TableRowColumn>
                            <Link to={`/player/${ player.id - 1}`} style={{ textDecoration: 'none', color: 'green' }}>{ player.name }</Link>
                        </TableRowColumn>
                        <TableRowColumn>{player.skills}</TableRowColumn>
                    </TableRow>
                ) }
            </TableBody>
        </Table>
    )
}