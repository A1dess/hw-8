function UserPage(props) {

    console.log(props); 
    return (
        <>
            <h1>Users list</h1>
            <ul>
           {   props.active?  props.users.map(user => <li>{user}</li>):<h1>ERROR</h1>}
            </ul>
        </>
    )
}


export default UserPage