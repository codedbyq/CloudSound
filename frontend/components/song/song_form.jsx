import React from 'react';

class SongForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = { title: '', description: '' }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createSong(this.state);
        this.setState({ title: '', description: '' });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="file"/>
                    <label>Title: 
                        <input type="text" placeholder='Enter a title'
                        value={this.state.title} onChange={this.handleInput('title')}/>
                    </label>
                    <br/>
                    <label>Description: 
                        <input type="text" placeholder='Enter a description'
                        value={this.state.description} onChange={this.handleInput('description')}/>
                    </label>
                    <br/>
                    <input type="submit" value='create'/>
                </form>
            </div>
        )
    }
}

export default SongForm;