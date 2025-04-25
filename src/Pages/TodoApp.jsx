import React,{useState,useEffect} from 'react'

const TodoApp = () => {
    const [list,setList] = useState([])
    const [item,setItem] = useState('')
    const myTaskAdd =()=>{
        if(item!=""){
            list.push(item)
            setList(list)
            setItem("")
        }
        else{
            alert("Please enter your task")
        }
    }
    const removeTask =(index)=>{
            console.log("Hellow",{index})
            const listUpdate= list.filter((ele,ind)=>index!=ind)
            setList(listUpdate)
    }
    const editTask = ()=>{
         alert("this is a edit task")
    }
    useEffect(()=>{
      console.log("apka program chall raha hai")
    },[])
  return (
    <div className='container'>
        <h1>Todo App</h1>
          <input type="text" value={item} placeholder='enter your task' onChange={(e)=>setItem(e.target.value)} />
          <button onClick={myTaskAdd}>Add</button> <br /><br />

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
                    <td><button onClick={()=>removeTask(index)}>Remove</button></td>
                    <td><button onClich={()=>editTask()}>Edit Task</button></td>
                   </tr>
              </>   
            )
        })}
        </table>
    </div>
  )
}

export default TodoApp
