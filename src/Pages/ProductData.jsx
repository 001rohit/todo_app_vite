import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Cart from './Cart'
const ProductData = () => {
    const [storeData,setStoreData] = useState([])
    
    // const getData =()=>{
        //     data.then((res)=>console.log(res.data))
        //     console.log("hii friends")
        //    }    
        
        //    const showData =()=>{
            //        console.log("hellow data")
            //        data.then((res)=>setStoreData(res.data))
            //     }
            let data = axios.get("https://fakestoreapiserver.reactbd.com/amazonproducts")
            data.then((res)=>setStoreData(res.data))
         
  return (
    <div className='product-wrapper'>
                 {/* <button onClick={getData}>Get Data</button> */}
                 {/* <button onClick={showData}>Show Data</button> */}
                 {storeData.map((elem,inde)=>{
                    return(
                        <div key={inde}>
                            <Cart title={elem.title} category={elem.category} description={elem.description} img={elem.image} />
                        </div>
                    )
                 })}
    </div>
  )
}

export default ProductData
