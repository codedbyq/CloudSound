import React from 'react';
import { Link } from 'react-router-dom';

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

        if (this.state.password) {
            this.props.action(this.state)
                .then(() => this.props.history.push('/discover'));
        } else {
            this.hideEmailDiv(e);
        }
    }

    demoLogin(e) {
        e.preventDefault();
        const user = { email: 'demo@login.com', password: '123456' };
        this.props.login(user)
            .then(() => this.props.history.push('/discover'));
    }

    handleClose(e) {
        e.preventDefault()
        const form = document.getElementById('session-form');

        if (e.target !== form) {
            this.props.history.goBack();
        }
    }

    render() {
        const placeholderMsg = this.props.formType === 'Login' ? 'Enter your email or profile url...' : 'Enter your email...';
        const usernameInput = this.props.formType === 'Sign Up' ? (<input className='session-input' type="text"
            placeholder='Enter your username...' value={this.state.username} 
            onChange={this.handleInput('username')} />) : null;
        const sessionLink = this.props.formType === 'Login' ? (<Link to='/signup'>Don't have an account?</Link>) : (
            <Link to='/login'>Already have an account?</Link> );
        const errors = this.props.errors.map(err => (
            <li>{err}</li>
        ));

        return (
            <div className='modal-screen' onClick={this.handleClose}>
                <div className='modal-button'><button id='modal-close-btn' onClick={this.handleClose}>&times;</button></div>
                
                <div className='modal-content'>
                    <form id='session-form' onSubmit={this.handleSubmit}>

                        <div className='email-div'>
                            
                            <button id='demo' className='provider-btn' onClick={this.demoLogin}>Demo Login</button>
                            <span>--- or ---</span>
                            <br/>
                            <input className='session-input' type="text" placeholder={placeholderMsg}
                            value={this.state.email} onChange={this.handleInput('email')} />
                            
                            <button className='session-btn' onClick={this.hideEmailDiv}>Continue</button>
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
                            {sessionLink}
                        </div>

                        <div>
                            <ul className='session-errors'>{errors}</ul>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default SessionForm;