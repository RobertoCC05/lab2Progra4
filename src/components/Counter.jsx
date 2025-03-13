import { useCounter } from "../hooks/useCounter"
export default function Counter(){
    const favNumber = 5;
    const {count, countCheck, increaseCount, dicreaseCount} = useCounter(favNumber);
    return(
        <div className="card">
            <p className="p-count">{count}</p>
            {countCheck && <p className="p-countCheck">You've reached my favorite number: {favNumber}</p>}
            <div className="dbuttons">
            <button onClick={increaseCount}>
                    Increase count ➕
                </button>
                <button onClick={dicreaseCount}>
                    Decrease count ➖
                </button>
            </div>
                
        </div>
    )
}

