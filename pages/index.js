import Layout from '../components/Layout'
import Hero from '../components/Hero'
import validator from '../components/Validator'

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

    /**
     * Triggered when the add button is pressed.
     */
    addButtonTapped() {
        var addAmount = prompt("How much did you spend just then?")
        if (addAmount) {
            if (validator(addAmount)) {
                this.setState({ amount: parseFloat(addAmount) + parseFloat(this.state.amount) }, () =>
                    localStorage.setItem('SpendtValue', this.state.amount)
                )
            } else {
                alert("Looks like you entered an invalid number, perhaps check it again? 🧐")
            }
        }
    }

    /**
     * Triggered when the subtract button is pressed.
     */
    subtractButtonTapped() {
        var subtractAmount = prompt("How much money did you just received?")
        if (subtractAmount) {
            if (validator(subtractAmount)) {
                this.setState({ amount: this.state.amount - parseFloat(subtractAmount) }, () =>
                    localStorage.setItem('SpendtValue', this.state.amount)
                )
            } else {
                alert("Looks like you entered an invalid number, perhaps check it again? 🧐")
            }
        }
    }

    /**
     * Reset the handler command.
     */
    resetAmount() {
        if (window.confirm("Do you wish to reset the amount?")) {
            this.setState({ amount: 0 })
            localStorage.clear()
        }
    }

    componentDidMount() {
        this.setState({ amount: localStorage.getItem('SpendtValue') || 0 })
    }

    render() {
        return (
            <Layout>
                <Hero amount={parseFloat(this.state.amount).toFixed(2)} onResetHandler={this.resetAmount} />

                <div className="button-wrapper">
                    <button type="button" onClick={this.addButtonTapped}>
                        <i className="fa fa-plus"></i>
                        <span>Add</span>
                    </button>
                    <button type="button" onClick={this.subtractButtonTapped}>
                        <i className="fa fa-minus"></i>
                        <span>Subtract</span>
                    </button>
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

                    button > * {
                        margin: 0 5px;
                    }
                `}</style>
            </Layout>
        )
    }
}

