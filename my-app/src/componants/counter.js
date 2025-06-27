import React,{useState} from "react";


 export default function Counter(){

const[count,setCount]=useState(0);

return(
<div>
<h1>You cliked this button {count}</h1>
<button onClick={()=>{
    setCount(count+1)
}}>cliked</button>
</div>

)





}
