import  { useState, useEffect } from 'react'

const Counter = () => {

    const [count, setCount] = useState(3)

    useEffect(()=> {
        console.log(`count: ${count}`)

        return ()=> {
            console.log("cleaning up")
        }
    },[count])

  

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

            {/* useEffect visuals */}

        </div>
    )
}

export default Counter
