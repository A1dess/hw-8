import React from "react";
import { User } from "../components/User";
class UserPage extends  React.Component {
constructor(props) {
    super(props);
    this.state = {
        users: [],
        user:[]
    }
}


getUsers = async () =>{
    const respons = await fetch (`https://jsonplaceholder.typicode.com/users`)
    const users = await respons.json ()

    this.setState({users})
}


componentDidMount () {
    this.getUsers()
}

componentDidUpdate (prevState){
    if(prevState.users !== this.state.users){
        console.log(this.state.users);
    }
}

moreInfo  = async (id)=>{
    const respons = await fetch (`https://jsonplaceholder.typicode.com/users/${id}`)
    const user = await respons.json ()

    this.setState({user})
}

render () {
    return(
    <>
    <h1>users list</h1>
    <ul>
        <li>name{this.state.user.name}</li>
        <li>email{this.state.user.email}</li>
        <li>phone{this.state.user.phone}</li>


    </ul>
    <button onClick={this.getUsers}>get users</button>

    <ul>
        
        {this.state.users.map(user => <User userInfo={user}hand={this.moreInfo} key={user.id}/>)}

    </ul>
    </>
    )
}

}

export default UserPage;