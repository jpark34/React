// import React, { Component } from "react"
import React from 'react'

// custom class component
// capitalize these in order to differentiate them
// from regular HTML elements
// a class component must include render()
// class Table extends Component {
//     render() {
//         const { characterData } = this.props

//         return (
//             <table>
//                 <TableHeader />
//                 <TableBody characterData={characterData} />
//             </table>
//         )
//     }
// }

// added ability to affect state and data from props
// create a table element to display the data
const Table = (props) => {
    const { characterData, removeCharacter } = props

    return (
        <table>
            <TableHeader />
            <TableBody characterData={characterData} removeCharacter={removeCharacter} />
        </table>
    )
}

// simple component -> just a function that doesn't use the class keyword
// create the header for the table
const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>
    )
}

// create the body for the table
const TableBody = (props) => {
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td>
                    <button onClick={() => props.removeCharacter(index)}>Delete</button>
                </td>
            </tr>
        )
    })

    return (
        <tbody>{rows}</tbody>
    )
}

export default Table