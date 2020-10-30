import React, { Component } from 'react';

export default class PersonCard extends Component{
    constructor(props){
        super(props);
        this.state = {
            age : this.props.user.age
        }
    }

    render(){
        return(
        <div>
            <h1>{this.props.user.lastName}, {this.props.user.firstName}</h1>
            <p>Age: {this.state.age}</p>
            <p>Hair Color: {this.props.user.hairColor}</p>
            <button onClick={ () => this.setState({age: this.state.age+1}) }>Birthday Button for {this.props.user.firstName} {this.props.user.lastName}</button>
        </div>
        );
    }
}