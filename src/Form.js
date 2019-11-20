import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        
        this.initialState = {
            firstname: '',
            lastname: '',
            mail: ''
        };

        this.state = this.initialState;
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name] : value
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { firstname, lastname, mail } = this.state; 

        return (
            <form onSubmit={this.onFormSubmit}>
                <label>Firstname</label>
                <input 
                    type="text" 
                    name="firstname" 
                    value={firstname} 
                    onChange={this.handleChange} />
                <label>Lastname</label>
                <input 
                    type="text" 
                    name="lastname" 
                    value={lastname} 
                    onChange={this.handleChange} />
                <label>Email</label>    
                <input 
                    type="text" 
                    name="mail" 
                    value={mail} 
                    onChange={this.handleChange} />
                <button type="submit">
                    Submit
                </button>
            </form>
        );
    }
}

export default Form;