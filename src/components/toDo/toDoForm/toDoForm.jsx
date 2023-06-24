import { useState } from "react";
import { addToDoItem } from "../../../app/slices/toDoSlice";

import { useDispatch } from "react-redux";

function ToDoForm() {
  const dispatch = useDispatch()

    const [inp, setInp] = useState("")

    const btnHandler =(e)=>{
        e.preventDefault()
        let newObj = {
            id: Math.random()*1000 + new Date().getMilliseconds(),
            title:inp,
        }
        dispatch(addToDoItem(newObj))
        setInp("")
    }

    return (
        <>
        <form action="">
        <input 
                type="text" 
                placeholder="... add to do " 
                value={inp} 
                onChange={(e) => setInp(e.target.value)} />
            <button onClick={btnHandler}>Add</button>
        </form>
           
        </>
    );
}

export default ToDoForm;