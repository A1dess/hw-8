
import React from "react"
class CountPage extends React.Component {

        constructor(props) {
            super(props)
            this.state = {
                count: 0,
                title: ""}
        }


        increment = () => {
            this.setState({ count: this.state.count + 1, title: "start"})
        }

        changeTitle = () => {
            this.setState({  title:"go count increment"})
        }



        render () {

            return (
                <>
                    <h1>{this.state.count}-{this.state.title}</h1>
                    <button onClick={this.increment}>+</button>
                    <button>-</button>
                    <button onClick={this.changeTitle}>changeTitle</button>
                </>
            )
        }
}


export default CountPage;