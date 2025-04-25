import React,{useState,useEffect} from 'react'

const TodoApp = () => {
    const [list,setList] = useState([])
    const [item,setItem] = useState('')
    // const [listDateTime,setListDateTime] = ([])
    // const [dateTime,setDateTime] = ('')
    // const week = ["SunDay","MonDay","TuesDay","WednesDay","ThursDay","FriDay","SaterDay"]
    // const month = ["Jan","Feb","March","April","May","Jun","July","Agust","Sept","Oct","Nov","Dev"]
    const myTaskAdd =()=>{
        if(item!=""){
            list.push(item)
            setList(list)
            setItem("")
        }
        else{
            alert("Please enter your task")
        }
        // let date = new Date()
        // let  date1 = date.getDate()
        // let  month1 = date.getMonth()+1
        // let yr = date.getFullYear()
        // let h = date.getHours()
        // let m = date.getMinutes()
        // let s = date.getSeconds()
        // console.log(date1,month1,yr,h,m,s)
        // month = month[month1]
      //  let res = `${date1}/ ${month1}/ ${yr}`
        //  console.log(res)
        //  setDateTime([...res])
        //  console.log(dateTime)
        // listDateTime.push([...dateTime])
        // setListDateTime(listDateTime)
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
        <h1>Todo App </h1>
          <input type="text" value={item} placeholder='enter your task' onChange={(e)=>setItem(e.target.value)} />
          <button onClick={myTaskAdd}>Add</button> <br /><br />
          <table border={1} className='task-table'>
            <tr>
                <th>S.No</th>
                <th>Task</th>
                <th>Remove</th>
                <th>Edit</th>
                <th>Time Status</th>
            </tr>
           {list.map((elem,index)=>{
               return(
                   <>
                   <tr>
                    <td>{index+1}</td>
                    <td>{elem}</td>
                    <td><button onClick={()=>removeTask(index)}>❌</button></td>
                    <td><button onClick={()=>editTask()}>🫣</button></td>
                   </tr>
              </>   
            )
        })}
        </table>
    </div>
  )
}

export default TodoApp
