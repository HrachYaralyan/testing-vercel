import { createSlice } from "@reduxjs/toolkit";


let initialStateToDo  = 
{
    toDoArr : [
        {
            id:1,
            title:"Learn js "
        },
        {
            id:2,
            title:"Learn React "
        }
    ]
}




export const toDoSlice = createSlice({
    name:"toDo",
    initialState:initialStateToDo,
    reducers:{
        addToDoItem(state , action){
            state.toDoArr.push(action.payload)

        },
        deleltToDoItem(state , action){
            let filterArr = state.toDoArr.filter((item)=>{
                return item.id !== action.payload;
            })
            state.toDoArr = filterArr;
        }
    },

})

export const {addToDoItem  ,deleltToDoItem} = toDoSlice.actions;

export default toDoSlice.reducer;
