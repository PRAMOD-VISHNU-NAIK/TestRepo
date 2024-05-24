import React, { useMemo, useState } from 'react'

function Counter() {
    const [counterOne , setCounterOne] = useState(0);
    const [counterTwo , setCounterTwo] = useState(0);

    const incrementOne = () => {
        return setCounterOne(counterOne + 1);
    }

    const incrementTwo = () => {
        return setCounterTwo(counterTwo + 1);
    }

    const isEven = useMemo(() => {
        let i =1
        while ( i<200000000) i++;
        return counterOne % 2 === 0;
    },[counterOne])

  return (
    <div>
        <div>
            <button onClick={incrementOne}>Counter-1: {counterOne} </button>
            <span>{isEven ? 'Even': 'Odd'}</span>
        </div>
        <div>
            <button onClick={incrementTwo}>Counter-2: {counterTwo} </button>
        </div>
    </div>
  )
}

export default Counter