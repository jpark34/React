import React, { Component } from 'react'
import Table from './Table'

// creates the app component
// each component should get their own file
class App extends Component {
    // create a state object to allow 2 way data flow
    state = {
        characters: [
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
        ],
    }

    // pass the state and removeCharacter function to the table class
    render() {
        const { characters } = this.state
        
        return (
            <div className='container'>
                <Table characterData={characters} removeCharacter={this.removeCharacter} />
            </div>
        )
    }

    removeCharacter = (index) => {
        const { characters } = this.state
    
        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index
            })
        })
    }

    // render() {
    //     const characters = [
    //         {
    //             name: 'Charlie',
    //             job: 'Janitor',
    //         },
    //         {
    //             name: 'Mac',
    //             job: 'Bouncer',
    //         },
    //         {
    //             name: 'Dee',
    //             job: 'Aspiring Actress',
    //         },
    //         {
    //             name: 'Dennis',
    //             job: 'Bartender',
    //         },
    //     ]

    //     // pass the json like array to the table class as a prop
    //     return (
    //         <div className="container">
    //             <Table characterData={characters} />
    //         </div>
    //     )
    // }
}

export default App