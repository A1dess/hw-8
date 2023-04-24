import React from "react";
import User from "../components/User";


class UsersPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        users: [],
        value: ''
        }
    }

    getUsers = () => {
        this.setState({
            users: ["John", "Mike", "Anna"]
        })
    }
       chaneInput = (event) =>{
this.setState({value: event.target.value})
       }

       addUser = () =>{
        this.setState({users:[...this.state.users, this.state.value]})
       }
    render () {
        return (
            <>
            <h1>users list</h1>
            <input type="text" placeholder="name" onChange={this.chaneInput}/>
            <button onClick={this.addUser}>add user</button>
            <button onClick={this.getUsers}>get users</button>

            {
                this.state.users.map((user, index, ) =><User name={user} key={index}/> )
            }
            </>
        )
    }
}


export default UsersPage;