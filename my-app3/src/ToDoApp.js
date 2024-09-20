import { useEffect,useState } from "react"
import axios  from 'axios'


const   ToDoApp = () => {
  const[users,setUsers]= useState([]);
   useEffect(()=>{
    // function for get data
 const FetchData = async()=>{
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
   console.log(response)
 }


  // call the fun
  FetchData();
   },[])





}

export default  ToDoApp;

