import React, { Component } from 'react'
import Table from './Table'

// creates the app component
// each component should get their own file
class App extends Component {
    render() {
        const characters = [
            {
                name: 'Charlie',
                job: 'Janitor',
            },
            {
                name: 'Mac',
                job: 'Bouncer',
            },
            {
                name: 'Dee',
                job: 'Aspiring Actress',
            },
            {
                name: 'Dennis',
                job: 'Bartender',
            },
        ]

        // pass the json like array to the table class as a prop
        return (
            <div className="container">
                <Table characterData={characters} />
            </div>
        )
    }
}

export default App