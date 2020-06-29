import React from 'react';
import ReactPlayer from 'react-player';
import SongBanner from './song_show_banner';

class SongShow extends React.Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

   componentDidMount() {
       debugger
       this.props.fetchSong(this.props.match.params.songId);
    }
    
    handleDelete(e) {
        e.preventDefault();
        this.props.deleteSong(this.props.match.params.songId)
        .then(() => this.props.history.push('/'));
    }
    
    render() {
        //conditional attributes
        const song = this.props.song;
        const artist = this.props.artist ? this.props.artist : null
        const cover = song ? song.coverURL : null;
        const audio = song ? song.audioURL : null;
        const title = song ? song.title : null;
        const genre = song ? song.genre : null;
        const description = song ? song.description : null;
       
        return (
            <SongBanner cover={cover} audio={audio} title={title} 
            artist={artist} genre={genre}  />    
        )
    }
}

export default SongShow;