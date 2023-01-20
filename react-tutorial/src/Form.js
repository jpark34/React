import React, { Component } from 'react'

// create a form component so that data can be saved
class Form extends Component {
    initialState = {
        name: '',
        job: '',
    }

    state = this.initialState

    // update the state of the table
    handleChange = (event) => {
        const { name, value } = event.target

        this.setState({
            [name]: value,
        })
    }

    // pass the form's state as the character param and reset the form
    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }

    render() {
        const { name, job } = this.state;

        return (
            <form>
                <label htmlFor='name'>Name</label>
                <input type='text'
                    name='name'
                    id='name'
                    value={name}
                    onChange={this.handleChange} />
                <input type='text'
                    name='job'
                    id='job'
                    value={job}
                    onChange={this.handleChange} />
                <input type='button' value='Submit' onClick={this.submitForm} />
            </form>
        );
    }
}

export default Form;