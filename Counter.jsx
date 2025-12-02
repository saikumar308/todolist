import React from 'react'
function Counter(){
    var [counter,setCounter]=React.useState(0)
    return(
        <div>
            <h1><i class="bi bi-hand-thumbs-up-fill"></i>:{counter} </h1>
            <button onClick={()=>{setCounter(counter+1)}}>like</button>
        </div>
    );
}
export default Counter;
