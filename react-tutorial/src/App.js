import React, { Component } from 'react'
import Table from './Table'

// creates the app component
// each component should get their own file
class App extends Component {
    render() {
        return (
            <div className="container">
                <Table />
            </div>
        )
    }
}

export default App