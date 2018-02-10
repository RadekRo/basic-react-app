import React from 'react';
import items from '../data/PlayersList';
import { Link } from 'react-router-dom';

import { Card, CardHeader } from 'material-ui/Card';

export default (props) => {

   const player = items[props.match.params.id];

    return player ?

        <Card>

            <CardHeader
                title={player.name}
                subtitle={player.info}
                actAsExpander={false}
                showExpandableButton={false}
            />
            <Link to='/' style={{ textDecoration: 'none', color: 'green', fontSize: '20px', padding: '15px' }}>&larr; Return to player list</Link>
        </Card>

        :

        <p>Player unknown</p>
}