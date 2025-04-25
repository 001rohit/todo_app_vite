import React,{useState} from 'react'

const TodoApp = () => {
    const [list,setList] = useState([])
    const [item,setItem] = useState('')
    const [count,setCount] = useState(0)
    const myTaskAdd =()=>{
        if(item!=""){
            list.push(item)
            setList(list)
            setItem("")
            setCount(count+1)
        }
        else{
            alert("Please enter your task")
        }
    }
  return (
    <div className='container'>
        <h1>Todo App</h1>
          <input type="text" value={item} placeholder='enter your task' onChange={(e)=>setItem(e.target.value)} />
          <button onClick={myTaskAdd}>Add</button>
          <h2>No. of Task {count}</h2>
          <table border={1} className='task-table'>
            <tr>
                <th>S.No</th>
                <th>Task</th>
                <th>Remove</th>
                <th>Edit</th>
            </tr>
           {list.map((elem,index)=>{
               return(
                   <>
                   <tr>
                    <td>{index+1}</td>
                    <td>{elem}</td>
                    <td><button>Remove</button></td>
                    <td><button>Edit Task</button></td>
                   </tr>
              </>   
            )
        })}
        </table>
    </div>
  )
}

export default TodoApp
