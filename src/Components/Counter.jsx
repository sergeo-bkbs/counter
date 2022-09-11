import { useDispatch, useSelector } from "react-redux";
import { increment,decrement } from "./CounterSLice";
const Counter = () => {

    const {count}=useSelector(state=>state.count)
    const dispatch=useDispatch();
    
        const handelIncrement=()=>{
           dispatch(increment());
        // setcounter(prev=>prev+1)

        }

        const handelDencrement=()=>{
            // setcounter(prev=>prev-1)
           dispatch(decrement());
        }


return (  
        <div>
            <p>Hello Redux</p>
            <p>{count}</p>
            <button onClick={handelIncrement}>Increment</button>
            <button onClick={handelDencrement}>Decrement</button>
        </div>
            );
        }
 
export default Counter;