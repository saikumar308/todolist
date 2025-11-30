import React from 'react'
function Todolist(){
    //state
    var [todos,setTodos] = React.useState([])

    //Action
    function addTodo(){
        var ntodo=document.getElementById('d1').value
        setTodos([...todos,ntodo])
    }
    function delTodo(ind){
        var temp=[...todos]
        temp.splice(ind,1)
        setTodos([...temp])
    }

    //ui
    return(
        <div className='m-3 p-5 border border-info'>
            <input type="text" id="d1" />
            <button onClick={()=>{addTodo()}}>ADD TODO</button> <br />
           <ul className='p-0 list-unstyled'>
            {todos.length==0 && <i>Please Add todo</i>}
            {
                todos.map((todo,i)=>{
                    return <li className='border border-2 p-2 my-2'>{todo}
                    <button onClick={()=>{delTodo(i)}}>Del</button>
                    
                    </li>
                })
            }
           </ul>
        </div>
    )
}
export default Todolist;