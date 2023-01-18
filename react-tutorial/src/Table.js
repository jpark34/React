import React, { Component } from "react"

// custom class component
// capitalize these in order to differentiate them
// from regular HTML elements
// a class component must include render()
class Table extends Component {
    render() {
        const { characterData } = this.props

        return (
            <table>
                <TableHeader />
                <TableBody characterData={characterData} />
            </table>
        )
    }
}

// simple component
// just a function that doesn't use the class keyword
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

const TableBody = (props) => {
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
            </tr>
        )
    })

    return (
        <tbody>{rows}</tbody>
    )
}

export default Table