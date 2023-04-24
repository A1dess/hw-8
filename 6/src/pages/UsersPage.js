
import { useState } from "react"
import { User } from "../components/User"



function UsersPage() {
   const [users, setUsers] = useState([])
   const [value, setValue] = useState('')

       const getUsers = () => {
           setUsers(["Anna", "John", "Mike"])
       } 
       
       const changeValue = (event) => {
          setValue(event.target.value)
       }

       const addUser = () => {
         setUsers([...users, value])
       }

       const deleteElement = (index) => {
        const filteredArr = users.filter ((user, key) => key !== index)
        setUsers(filteredArr);

       }


    return (
        <>
        <h1>Users List</h1>
        <input type="text" placeholder="name" onChange={changeValue}/>
        <button onClick={addUser}>add</button>
        <button onClick={getUsers}>get users</button>
        {
            users.map((user, index) => <User 
            key={index}
             name={user} 
             index={index}
             deleteElement={deleteElement}
             />)
        }
        </>
    )
}

export default UsersPage