import React from 'react';

const Score = props => (
    <div className="score">
        {props.type}: {props.score}
    </div>
)

export default Score;
