import Layout from "../components/Layout"
import Hero from "../components/Hero"

import React, { Component } from 'react'

export default class Home extends Component {

    constructor(props) {
        super(props)
        this.addButtonTapped = this.addButtonTapped.bind(this)
        this.subtractButtonTapped = this.subtractButtonTapped.bind(this)
    }

    addButtonTapped() {
        console.log("Add button tapped")
    }

    subtractButtonTapped() {
        console.log("subtract button tapped")
    }

    render() {
        return (
            <Layout>
                <Hero amount={23.30} />

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

