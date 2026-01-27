import {useState} from 'react'

const State = () => {
    const [count,setCount]=useState(0);   
  return (
    <div>
        <h3>UseState Example</h3>
        <h3>count:{count}</h3>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={()=>setCount(count-1)}>Decrement</button>
        </div>
  )
}

export default State