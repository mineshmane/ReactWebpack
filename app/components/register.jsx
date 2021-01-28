import React from 'react'
export default class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            first: ''
        }
    }

    handle = () => {
        console.log("not ded");
        this.setState({ first: "added" },()=>{
            console.log(this.state.first);
        })
    }
    render() {


        return (
            <div className="main">
                <div onClick={this.handle}>
                    resgitarion component

                </div>
            </div>
        )
    }
}