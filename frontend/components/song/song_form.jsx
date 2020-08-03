import React, { Component } from 'react';
import Dropzone from 'react-dropzone'

class SongForm extends React.Component {
    constructor(props, _railsContext) {
        super(props)
        this.state = { title: '', description: '', genre: '', 
        coverUrl: null, coverFile: null, audioFile: null }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAudio = this.handleAudio.bind(this);
        this.handleCover = this.handleCover.bind(this);
    }

    handleCover(e) {
        //user state.cover to inline set background image property
        const reader = new FileReader();
        const file = e.currentTarget.files[0];
        reader.onloadend = () => this.setState({ 
            coverUrl: reader.result, coverFile: file });

        if (file) {
            reader.readAsDataURL(file);
        } else {
            this.setState({ imageUrl: "", imageFile: null });
        }
    }

    handleAudio(e) {
        this.setState({ audioFile: e.currentTarget.files[0] })
        const audioDiv = document.querySelector('.audio-div');
        const contentDiv = document.querySelector('.second-slide');

        audioDiv.classList.add('hidden');
        audioDiv.id.add
        contentDiv.classList.remove('hidden');
    }

    handleInput(field) {
        return e => this.setState({ [field]: e.currentTarget.value})
    }

    hideContentDiv(e) {
        e.preventDefault();
        const audioDiv = document.querySelector('.hidden');
        const contentDiv = document.querySelector('.second-slide');

        contentDiv.classList.add('hidden');
        audioDiv.classList.remove('hidden');
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('song[title]', this.state.title);
        formData.append('song[genre]', this.state.genre);
        formData.append('song[description]', this.state.description);
        formData.append('song[coverFile]', this.state.coverFile);
        formData.append('song[audioFile]', this.state.audioFile);
        this.props.createSong(formData)
            .then((song) => this.props.history.push(`/songs/${song.id}`));
    }

    render() {
        const cover = {
            backgroundImage: `url(${this.state.coverUrl})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        }

        const errors = this.props.errors ? this.props.errors : null;

        return (
            <div id='song-form-div'>
                <form className='song-form' onSubmit={this.handleSubmit}>

                    <div className='audio-div' 
                    onDrop={this.handleAudio}>
                        Drag &amp; drop your track here
                        <label className="audio-upload">...or choose a file to upload 
                            <input className='input-file'
                            type="file" onChange={this.handleAudio}/>
                        </label>
                    </div>

                    <div className='second-slide hidden'>
                        <div className='song-basic-info'>
                            <label className='cover-div' style={cover}>
                                <span className='cover-msg'>Choose a cover</span>
                                <input type="file" onChange={this.handleCover}/>
                            </label>

                            <div className='form-content'>
                                <label id='title' className='song-form-label'>Title<p id='required'>*</p></label>
                                <input className='song-form-input' type="text" placeholder='Give your song a title'
                                value={this.state.title} onChange={this.handleInput('title')}/>
                                
                                <label className='song-form-label'>Genre</label>
                                <select onChange={this.handleInput('genre')} 
                                className='genre-option' value={this.state.genre}>
                                    <option value="">None</option>
                                    <option value="Alternative">Alternative</option>
                                    <option value="Ambient">Ambient</option>
                                    <option value="Classical">Classical</option>
                                    <option value="Country">Country</option>
                                    <option value="Dance &amp; EDM">Dance &amp; EDM</option>
                                    <option value="Dancehall">Dancehall</option>
                                    <option value="Dubstep">Dubstep</option>
                                    <option value="Electronic">Electronic</option>
                                    <option value="Hip-Hop">Hip-Hop</option>
                                    <option value="Indie">Indie</option>
                                    <option value="Jazz &amp; Blues">Jazz &amp; Blues</option>
                                    <option value="Latin">Latin</option>
                                    <option value="Metal">Metal</option>
                                    <option value="Piano">Piano</option>
                                    <option value="Pop">Pop</option>
                                    <option value="R&amp;B &amp; Soul">R&amp;B &amp; Soul</option>
                                    <option value="Reggae">Reggae</option>
                                    <option value="Reggaeton">Reggaeton</option>
                                    <option value="Rock">Rock</option>
                                    <option value="Soundtrack">Soundtrack</option>
                                </select>
                                

                                <label className='song-form-label'>Description</label>
                                <textarea cols="30" rows="10" className='description'
                                    placeholder='Describe your track' value={this.state.description}
                                    onChange={this.handleInput('description')}>
                                </textarea>
                                <ul className='song-errors'>{errors}</ul>
                            </div>
                        </div>
                        <div className='form-footer'>
                            <p><span id='required'>*</span> Required Fields</p>
                            <div className='song-form-btns'>
                                <button id='form-cancel' onClick={this.hideContentDiv}>Cancel</button>
                                <input id='form-save' type="submit" value='Save' onClick={this.handleSubmit}/>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default SongForm;