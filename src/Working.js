import React, { Component } from 'react'

class Working extends Component {
    constructor(){
        super()
        this.state = {
            message: 'Homer Simpson is working'
        }
    }
    false(){
        this.setState({
            message:'He is taking a break'
        })
    }
    render () {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.false()}>False</button>
                
            </div>
        );
    }
}

export default Working;
