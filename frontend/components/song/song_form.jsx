import React from 'react';

class SongForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = { title: '', description: '', 
        coverFile: null, audioFile: null }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    handleFile(field) {
        return e => this.setState({ [field]: e.currentTarget.files[0]})
    }

    handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData();
        formData.append('post[title]', this.state.title);
        formData.append('post[description]', this.state.description);
        formData.append('post[coverFile]', this.state.coverFile);
        formData.append('post[audioFile]', this.state.audioFile);
        this.props.createSong(formData);

        this.setState({title: '', description: '',
            coverFile: null, audioFile: null
        });
    }

    render() {
        return (
            <div id='song-form'>
                <form onSubmit={this.handleSubmit}>
                    <input type="file" value='Choose Cover Art' onChange={this.handleFile('coverFile')}/>
                    <input type="file" value='Upload Song' onChange={this.handleFile('audioFile')}/>

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