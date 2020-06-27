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
        formData.append('song[title]', this.state.title);
        formData.append('song[description]', this.state.description);
        formData.append('song[coverFile]', this.state.coverFile);
        formData.append('song[audioFile]', this.state.audioFile);

        this.props.createSong(formData)
            .then((song) => this.props.history.push(`/songs/${song.id}`));
    }

    render() {
        return (
            <div id='song-upload-div'>
                <form className='song-form' onSubmit={this.handleSubmit}>
                    <label>Choose your cover art:
                        <input type="file" onChange={this.handleFile('coverFile')}/>
                    </label>

                    <label>Upload your song:
                    <input type="file" onChange={this.handleFile('audioFile')}/>
                    </label>

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

                    <input type="submit" value='create' onClick={this.handleSubmit}/>
                </form>
            </div>
        )
    }
}

export default SongForm;