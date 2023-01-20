import React, { Component } from 'react'

// create a new app that will fetch data using an API
class App extends Component {
    state = {
        data: [],
    }

    // lifecycle method -> specify the order in which methods are called
    // check to see if the component has rendered to the DOM before bringing
    // in the data from the API
    componentDidMount() {
        const url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*'

        fetch(url)
            .then((result) => result.json())
            .then((result) => {
                this.setState({
                    data: result,
                })
            })
    }

    render() {
        const { data } = this.state

        const result = data.map((entry, index) => {
            return <li key={index}>{entry}</li>
        })

        return <ul>{result}</ul>
    }
}

export default App