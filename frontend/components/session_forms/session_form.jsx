import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.user;
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleClose = this.handleClose.bind(this)
        this.demoLogin = this.demoLogin.bind(this);
    }

    hideEmailDiv(e) {
        e.preventDefault();
        const emailDiv = document.querySelector('.email-div');
        const passDiv = document.querySelector('.hidden');

        emailDiv.classList.add('hidden');
        emailDiv.id.add
        passDiv.classList.remove('hidden');
    }

    hidePassDiv(e) {
        e.preventDefault();
        const emailDiv = document.querySelector('.email-div');
        const passDiv = document.querySelector('.pass-div');

        passDiv.classList.add('hidden');
        emailDiv.classList.remove('hidden');
    }

    handleInput(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    handleSubmit(e) {
        e.preventDefault;
        this.props.action(this.state)
            .then(() => this.props.history.push('/'));
    }

    demoLogin(e) {
        e.preventDefault();
        this.props.demoLogin();
    }

    handleClose(e) {
        this.props.history.goBack();
    }

    render() {
        const placeholderMsg = this.props.formType === 'Login' ? 'Enter your email or profile url...' : 'Enter your email...';
        const usernameInput = this.props.formType === 'Sign Up' ? (<input className='session-input' type="text"
            placeholder='Enter your username...' value={this.state.username} 
            onChange={this.handleInput('username')} />) : null;

        return (
            <div className='modal-screen'>
                <div className='modal-button'><button id='modal-close-btn' onClick={this.handleClose}>&times;</button></div>
                
                <div className='modal-content'>
                    <form id='session-form' onSubmit={this.handleSubmit}>

                        <div className='email-div'>
                            <button id='abc' className='provider-btn'>Sign in with Google</button>
                            <button id='fb' className='provider-btn'>Sign in with Facebook</button>
                            <button id='apple' className='provider-btn'>Sign in with Apple</button>
                            <button id='demo' className='provider-btn' onClick={this.demoLogin}>Demo Login</button>
                            <span>--- or ---</span>
                            <br/>
                            <input className='session-input' type="text" placeholder={placeholderMsg}
                            value={this.state.email} onChange={this.handleInput('email')} />
                            
                            <button className='session-btn' onClick={this.hideEmailDiv}>Continue</button>
                            <span><a href="" id='help'>Need Help?</a></span>
                            <div className='session-paragraph'>
                                <p>
                                    We may use your email and devices for updates and tips 
                                    on SoundCloud's products and services, and for activities 
                                    notifications. You can unsubscribe for free at any time 
                                    in your notification settings.
                                </p>
                                <br/>
                                <p>
                                    We may use information you provide us in order to show 
                                    you targeted ads as described in our <a href="">Privacy Policy</a>.
                                </p>
                            </div>
                        </div>

                        <div className='pass-div hidden'>
                            <button className='session-btn' id='prefilled-email-btn' onClick={this.hidePassDiv}>
                                <span id='prefilled-email-arrow'> &#9664; </span>
                                <span id='prefilled-email-text'>{this.state.email}</span>
                            </button>

                            {usernameInput}

                            <input className='session-input' type="password" placeholder='Enter your password...'
                            value={this.state.password} onChange={this.handleInput('password')} />

                            <input className='session-btn' type="submit" value={this.props.formType}/>
                            <a href="">Don't know your password?</a>
                        </div>

                    </form>
                </div>
            </div>
        )
    }
}

export default SessionForm;