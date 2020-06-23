import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { email: '', password: '' };
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    hideEmailDiv(e) {
        e.preventDefault();
        const emailDiv = document.getElementById('email-div');
        const passDiv = document.getElementById('pass-div');

        emailDiv.classList.add('hidden');
        passDiv.classList.remove('hidden');
    }

    hidePassDiv(e) {
        e.preventDefault();
        const emailDiv = document.getElementById('email-div');
        const passDiv = document.getElementById('pass-div');

        passDiv.classList.add('hidden');
        emailDiv.classList.remove('hidden');
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
            <div id='email-div'>
                <button>Sign in with Google</button>
                <button>Sign in with Facebook</button>
                <button>Sign in with Apple</button>
                --- or ---
                <label>Email:
                    <input type="text" value={this.state.email} onChange={this.handleInput('email')} />
                </label>
            </div>
        ) : (
            <div id='pass-div' className='hidden'>
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
                <form id='session-form' onSubmit={this.handleSubmit}>

                    <div id='email-div'>
                        <button>Sign in with Google</button>
                        <button>Sign in with Facebook</button>
                        <button>Sign in with Apple</button>
                        --- or ---
                        <label>Email:
                            <input type="text" value={this.state.email} onChange={this.handleInput('email')} />
                        </label>
                        <button onClick={this.hideEmailDiv}>Continue</button>
                        <a href="" id='help'>Need Help?</a>
                        <p>
                            We may use your email and devices for updates and tips on SoundCloud's products and services, and for activities notifications. You can unsubscribe for free at any time in your notification settings.
                        </p>
                        <br/>
                        <p>
                            We may use information you provide us in order to show you targeted ads as described in our <a href="">Privacy Policy</a>.
                        </p>
                    </div>

                    <div id='pass-div' className='hidden'>
                        <button id='prefilled-email-btn' onClick={this.hidePassDiv}>
                            <span id='prefilled-email-arrow'> ◂ </span>
                            <span id='prefilled-email-text'>{this.state.email}</span>
                        </button>
                        <label>Password:
                            <input type="password" value={this.state.password} onChange={this.handleInput('password')} />
                        </label>
                        <input type="submit" value={this.props.formType}/>
                        <a href="">Don't know your password?</a>
                    </div>

                </form>
            </div>
        )
    }
}

export default SessionForm;