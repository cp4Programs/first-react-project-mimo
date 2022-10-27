import React, { Component } from 'react'

export default class Profile extends Component {

    constructor(props) {
        super(props)
        this.state = {
            myTitle: this.props.title
        }
    }

    changeMyTitle = () => {
        this.setState({
            myTitle: "Child's Title"
        })
    }

    render() {
        return (
            <div className="profile-container">
                <h1>{this.state.myTitle}</h1>
                <p>{this.props.quote}</p>
                <img src={this.props.image} />
                <button onClick={this.props.changeTitle}>Parent's Title</button>
                <button onClick={this.changeMyTitle}>My Title</button>
            </div>
        )
    }
}