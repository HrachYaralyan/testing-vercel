import { useDispatch } from "react-redux";
import { deleltToDoItem } from "../../../app/slices/toDoSlice";


function ToDoItem({data}) {
const dispatch = useDispatch();

    const btnHandler = ()=>{
        dispatch(deleltToDoItem(data.id))
    }


    console.log(data, "in ToDoItem");
    return ( 
        <>
            <div>
                {

                    <><span>Title ::</span><span>{data.title}</span>
                    <button onClick={btnHandler}>Del</button>

                    </>
                }
                
            </div>
        </>
     );
}

export default ToDoItem;