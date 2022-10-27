import React, { Component } from 'react'
import Profile from './Profile'

export default class Homepage extends Component {

    constructor() {
        super()
        this.state = {
            title: "Quotes",
            url_one: "https://images.unsplash.com/photo-1545052089-dc4558c4ff6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
            url_two: "https://images.unsplash.com/photo-1473286835901-04adb1afab03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            quote_one: "",
            quote_two: ""
        }
    }

    changeTitle = () => {
        this.setState({
            title: "Second Quote"
        })
    }

    componentDidMount() {
        fetch('https://quote-garden.herokuapp.com/api/v3/quotes')
            .then(res => res.json())
            .then(response => {
                this.setState = ({
                    quote_one: response.data[0].quoteText,
                    quote_two: response.data[1].quoteText
                })
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <h1> {this.state.title} </h1>
                <Profile image={this.state.url_one}
                    title={this.state.title}
                    changeTitle={this.changeTitle}
                    quote={this.state.quote_one} />

                <Profile image={this.state.url_two}
                    title={this.state.title}
                    changeTitle={this.changeTitle}
                    quote={this.state.quote_two} />
            </div>
        )
    }
}