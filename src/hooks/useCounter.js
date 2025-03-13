import { useState, useEffect } from 'react'
export function useCounter(favNumber){
    const [count, setCount] = useState(
      Number(localStorage.getItem("count")|| 0 )
    )
    const [countCheck, setCountCheck] = useState(false)
    const dicreaseCount = () =>{
      if(count >0){
        setCount((count) => count -1);
      }
    }
    const increaseCount = () =>{
      if(count <100){
        setCount((count) => count +1);
      }
    }

    useEffect(() => {
      localStorage.setItem("count",count)
    }, [count])
    
    useEffect(() => {
      if (count === favNumber) {
        setCountCheck(true);
      }else{
        setCountCheck(false)
      }
    }, [count, favNumber]);


    return {count,countCheck, increaseCount, dicreaseCount}
  }

  // <p className="p-favNumber-message">{``}</p>