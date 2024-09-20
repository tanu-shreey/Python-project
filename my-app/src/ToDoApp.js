import { useEffect, useState } from "react"
import axios from 'axios'


const ToDoApp = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    // function for get data
    const FetchData = async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/comments');
      console.log(response)
      setUsers(response.data);
    }


    // call the fun
    FetchData();
  }, [])

  return (<>


    <h1> Data </h1>

    <ul>
      {

        users.map((user, index) => (
          <li key={index}>
            name : {user.name}
            Email :{user.email}

          </li>

        ))
      }
    </ul>
  </>)
}

export default ToDoApp;