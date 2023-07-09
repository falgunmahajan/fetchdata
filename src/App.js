import { useState, useEffect } from 'react'
import axios  from 'axios'
import './App.css';
function Table(props)
{
  let fetchedData=props.data;
  let tableHeading=Object.keys(fetchedData[0]).map(key=><th>{key}</th>)
  let tableData=fetchedData.map(item=>{
    return<tr>{Object.keys(item).map(key=><td>{item[key]}</td>)}</tr> 
  })
    return(
      <table className='table  table-bordered caption-top border-dark m-auto my-5 p-3 w-75' >
        <caption className='text-center fw-bold fs-3 text-capitalize'>{props.state} Data</caption>
        <thead className='align-middle'><tr>{tableHeading}</tr></thead>
        <tbody className='align-middle'>{tableData}</tbody>
        
      </table>  
    )
}
function App() {
  let [state,setState]=useState('');
  let [data,setData]=useState()
   useEffect(()=>{
    console.log(data)
    if(state)
    axios.get(`https://jsonplaceholder.typicode.com/${state}`)
      .then(response =>setData(response.data))
  },[state]);
  return (
    <div className="mx-3 my-5 App">
      
    <button className='me-2 btn-lg px-3' onClick={()=>setState("posts")}>Posts</button>
    <button className='me-2 btn-lg' onClick={()=>setState("comments")}>Comments</button>
    <button className='me-2 btn-lg' onClick={()=>setState("albums")}>Albums</button>
    
     {data?<Table data={data} state={state}/>:""}
    </div>
  );
}

export default App;
