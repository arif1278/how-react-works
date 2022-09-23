import React, { useEffect, useState } from 'react';
import Dial from '../Dial/Dial';

import Displaying from '../Displaying/Displaying';

const Watch = () => {
    const [steps, setSteps] = useState(0)

    const increaseSteps = () => {
        const newStepsCount = steps + 1;
        setSteps(newStepsCount);

    }
    const DecreaseSteps = () => {
        const newStepsCount2 = steps - 1;
        setSteps(newStepsCount2);
    }

    useEffect(() => {
        console.log(steps);
    }, [steps])

    return (
        <div style={{ border: '2px solid black', margin: '20px' }}>
            <h2>This is my smart Watch</h2>
            <h3>My current step {steps}</h3>
            <button onClick={increaseSteps}>De dour.......</button>
            <button onClick={DecreaseSteps}>Dour Thama.</button>
            <Displaying name="ajmeri" steps={steps}></Displaying>
            <Dial steps={steps}></Dial>
        </div>
    );
};

export default Watch;