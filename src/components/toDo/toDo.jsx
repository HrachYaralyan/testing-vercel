import ToDoForm from "./toDoForm/toDoForm";
import "./toDo.css"

import { useSelector  } from "react-redux";

import ToDoItem from "./toDoItem/toDoItem";

function ToDo() {
    const toDoArr = useSelector((state) => state.toDo.toDoArr)

    return ( 

        <>
            <div className="toDoWrapper">
                    <div className="form">
                        <ToDoForm/>
                    </div>
                    <div className="itemsWrapper">
                        {
                            toDoArr.map((item)=>{
                                return <ToDoItem  data={item} key={item.id}/>
                            })
                        }
                    </div>
            </div>

        </>
     );
}

export default ToDo;