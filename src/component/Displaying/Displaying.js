import React from 'react';

const Displaying = (props) => {
    return (
        <div style={{ border: '1px solid red', margin: '30px' }}>
            <h2> Name: {props.name}</h2>
            <p>So far Today: {props.steps}</p>
        </div>
    );
};

export default Displaying;