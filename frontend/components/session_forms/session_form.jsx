import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.user;
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInput(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    handleSubmit(e) {
        e.preventDefault;
        this.props.action(this.state);
    }

    render() {
        let addEmail;
        if (this.props.formType === 'Sign Up') {
            addEmail = (
                <>
                <label>Email:
                        <input type="text" value={this.state.email} onChange={this.handleInput('email')} />
                </label>
                <br/> <br/>
                </>
            )
        }


        return (
            <div>
                <h1>{this.props.formType}</h1>
                <form id='session-form'>
                    {addEmail}

                    <label>Username: 
                        <input type="text" value={this.state.username} onChange={this.handleInput('username')}/>
                    </label>
                    <br/> <br/>

                    <label>Password: 
                        <input type="password" value={this.state.password} onChange={this.handleInput('password')}/>
                    </label>
                    <br/> <br/>

                    <button onClick={this.handleSubmit}>{this.props.formType}</button>
                </form>
            </div>
        )
    }
}

export default SessionForm;