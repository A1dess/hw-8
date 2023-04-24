import React from "react";



class MainPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title: "Old title"
        }
    }

    sayHello = () => {
        alert("hello world")
    }

    changeTitle = () => {
        this.setState({
            title: "Hello world"
        })
    }

    render () {
        return (
            <>
                <h1>{this.state.title}</h1>
                <button onClick={this.changeTitle}>change title</button>
                <button onClick={this.sayHello}>say hello</button>
            </>
        )
    }
}

export default MainPage;