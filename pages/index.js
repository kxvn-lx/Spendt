import Layout from "../components/Layout"
import Hero from "../components/Hero"

import React, { Component } from 'react'

export default class Home extends Component {

    constructor(props) {
        super(props)
        this.addButtonTapped = this.addButtonTapped.bind(this)
        this.subtractButtonTapped = this.subtractButtonTapped.bind(this)
        this.resetAmount = this.resetAmount.bind(this)
    }

    state = {
        amount: 0
    }

    addButtonTapped() {
        var addAmount = prompt("How much did you spend just then?")
        this.setState({amount: parseFloat(addAmount) + this.state.amount})
    }

    subtractButtonTapped() {
        var subtractAmount = prompt("How much money did you just received?")
        this.setState({amount: this.state.amount - parseFloat(subtractAmount)})
    }

    resetAmount() {
        this.setState({amount: 0})
    }

    render() {
        return (
            <Layout>
                <Hero amount={this.state.amount} onResetHandler={this.resetAmount}/>

                <div className="button-wrapper">
                    <button type="button" onClick={this.addButtonTapped}>Add</button>
                    <button type="button" onClick={this.subtractButtonTapped}>Subtract</button>
                </div>

                <style jsx>{`
                    .button-wrapper {
                        position: absolute;
                        bottom: 5em;
                        display: inline-grid;
                        max-width: 500px;
                        width: 70vw;
                        left: 50%;
                        transform: translate(-50%, 0);
                    }
    
                    button {
                        height: 7vh;
                        margin: 1em;
                    }
                `}</style>
            </Layout>
        )
    }
}

