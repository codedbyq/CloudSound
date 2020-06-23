import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { email: '', password: '' };
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    setEmail(e) {
        e.preventDefault
    }

    handleInput(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    handleSubmit(e) {
        e.preventDefault;
        this.props.action(this.state);
    }

    render() {
        const display = this.state.email ? (
            <div>
                <button>Sign in with Google</button>
                <button>Sign in with Facebook</button>
                <button>Sign in with Apple</button>
                --- or ---
                <label>Email:
                    <input type="text" value={this.state.email} onChange={this.handleInput('email')} />
                </label>
            </div>
        ) : (
            <div>
                <button onClick={this.resetForm}>{ '   ◂   ' + this.state.email }</button>
                <br/> <br/>
                <label>Password:
                    <input type="password" value={this.state.password} onChange={this.handleInput('password')} />
                </label>
                <br /> <br />
            </div>
        )


        return (
            <div>
                <h1>{this.props.formType}</h1>
                <form id='session-form'>

                    <label>Email:
                        <input type="text" value={this.state.email} onChange={this.handleInput('email')} />
                    </label>
                    <br/> <br/>

                    <label>Password: 
                        <input type="password" value={this.state.password} onChange={this.handleInput('password')}/>
                    </label>
                    <br/> <br/>

                    <button onClick={this.handleSubmit}>{this.props.formType}</button>
                </form>

                <a href="" id='help'>Need Help?</a>

                <p>
                    We may use your email and devices for updates and tips on SoundCloud's products and services, and for activities notifications. You can unsubscribe for free at any time in your notification settings.
                </p>
                <br/>
                <p>
                    We may use information you provide us in order to show you targeted ads as described in our <a href="">Privacy Policy</a>.
                </p>
            </div>
        )
    }
}

export default SessionForm;