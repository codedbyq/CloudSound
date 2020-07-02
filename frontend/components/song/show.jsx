import React from 'react';
import ReactPlayer from 'react-player';
import SongBanner from './song_show_banner';

class SongShow extends React.Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

   componentDidMount() {
       this.props.fetchSong(this.props.match.params.songId)
       .then(song => this.props.fetchUser(song.artist_id));
    }
    
    handleDelete(e) {
        e.preventDefault();
        this.props.deleteSong(this.props.match.params.songId)
        .then(() => this.props.history.push('/'));
    }
    
    render() {
        const song = this.props.song;
        const artist = this.props.artist;

        const username = artist ? artist.username : null
        const cover = song ? song.coverURL : null;
        const audio = song ? song.audioURL : null;
        const title = song ? song.title : null;
        const genre = song ? song.genre : null;
        const songId = song? song.id : null
        const description = song ? song.description : null;
       
            
        return (
            <div className='song-show'>
                <SongBanner cover={cover} audio={audio} title={title} 
                artist={username} genre={genre} songId={songId} />    
                <button onClick={this.handleDelete}>&#x1F5D1;</button>
            </div>
        )
    }
}

export default SongShow;