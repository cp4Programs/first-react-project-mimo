import React, { Component } from 'react'
import App from './App';

export default class Header extends Component {

    constructor() {
        super()
        this.state = {
            username: "John Doe",
            image_url: "https://images.unsplash.com/photo-1545052089-dc4558c4ff6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
        }
    }


    changeUser = () => {
        this.setState({
            username: "Jane Doe",
            image_url: "https://images.unsplash.com/photo-1473286835901-04adb1afab03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        })
    }

    render() {
        return (
            <div className="header-container">
                <div className="header-profile">
                    <p>{this.state.username}</p>
                    <img className="profile-img" src={this.state.image_url} />
                </div>
                <button onClick={this.changeUser}>Change User</button>
            </div>

        );
    }
}

