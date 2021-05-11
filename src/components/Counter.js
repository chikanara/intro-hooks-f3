import React,{useState,useEffect} from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    const increment = () => {
        setCount(count+1)
    }
    const decrement = () => {
        if(count>0){
            setCount(count-1)
        }
    }
    useEffect(() => {
      console.log("componentDidMount()")
      let memoryId = setInterval(() => {
          setCount(prevcount => prevcount+1)
      }, 1000);
      return () => {
          console.log("ComponentWillUnmount()")
          clearInterval(memoryId)
      }
        
    }, [])
    useEffect(() => {
       console.log("componentDidUpdate()")
    }, [count])
 
    console.log("render()")
    return (
        <div>
            <button onClick={increment}>+</button>
            <h1>{count}</h1>
            <button onClick={decrement}>-</button>
        </div>
    )
}

export default Counter
