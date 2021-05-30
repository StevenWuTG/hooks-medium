import  { useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState(3)

  

    return (
        <div>
            
            <h1>Count</h1>

            {/* plus button */}
            <button onClick={() => setCount(count + 1)}>
                +
            </button>
            {/* state of count */}
            {count}

            {/* minus button */}
            <button  onClick={() => setCount(count - 1)}>
                -
            </button>
        </div>
    )
}

export default Counter
