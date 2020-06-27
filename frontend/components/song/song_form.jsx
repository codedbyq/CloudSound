import React from 'react';

class SongForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = { title: '', description: '', 
        coverFile: null, audioFile: null }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAudio = this.handleAudio.bind(this);
        this.handleCover = this.handleCover.bind(this);
    }

    handleCover(e) {
        this.setState({ coverFile: e.currentTarget.files[0] })

        //user state.cover to inline set background image property
    }

    handleAudio(e) {
        this.setState({ audioFile: e.currentTarget.files[0] })
        //use this function to hide the audio upload and show the form content div
    }

    handleInput(field) {
        return e => this.setState({ [field]: e.currentTarget.value[0]})
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
            <div id='song-form-div'>
                <form className='song-form' onSubmit={this.handleSubmit}>

                    <div className='audio-upload'>
                        <h1>Drag and drop your track here</h1>
                        <input type="file" onChange={this.handleAudio}/>
                    </div>

                    <div className='song-basic-info hide'>
                        <div className='cover-art'>
                            <input type="file" onChange={this.handleCover}/>
                        </div>

                        <div className='form-content'>
                            <label className='song-form-label'>Title<p id='required'>*</p></label>
                            <input className='song-form-input' type="text" placeholder='Give your song a title'
                            value={this.state.title} onChange={this.handleInput('title')}/>
                            
                            <label>Genre</label>
                            <select name="genres">
                                <option value="None">None</option>
                                <option value="Alternative">Alternative</option>
                                <option value="Ambient">Ambient</option>
                                <option value="Classical">Alternative</option>
                                <option value="Country">Country</option>
                                <option value="Dance &amp; EDM">Dance &amp; EDM</option>
                                <option value="Dancehall">Dancehall</option>
                                <option value="Drum and Bass">Drum &amp; Bass</option>
                                <option value="Dubstep">Dubstep</option>
                                <option value="Electronic">Electronic</option>
                                <option value="Folk">Folk</option>
                                <option value="Hip-Hop">Hip-Hop</option>
                                <option value="House">House</option>
                                <option value="Indie">Indie</option>
                                <option value="Jazz &amp; Blues">Jazz &amp; Blues</option>
                                <option value="Latin">Latin</option>
                                <option value="Metal">Metal</option>
                                <option value="Piano">Piano</option>
                                <option value="R&amp;B &amp; Soul">R&amp;B &amp; Soul</option>
                                <option value="Reggae">Reggae</option>
                                <option value="Reggaeton">Reggaeton</option>
                                <option value="Rock">Rock</option>
                                <option value="Soundtrack">Soundtrack</option>
                                <option value="Techno">Techno</option>
                            </select>
                            

                            <label className='song-form-label'>Description</label>
                            <textarea className='song-form-input'  cols="30" rows="10" 
                                placeholder='Describe your track' value={this.state.description}
                                onChange={this.handleInput('title')}></textarea>
                        </div>
                    <div id='form-buttons'>
                        <button id='form-cancel'>Cancel</button>
                        <input id='form-save' type="submit" value='Save' onClick={this.handleSubmit}/>
                    </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default SongForm;