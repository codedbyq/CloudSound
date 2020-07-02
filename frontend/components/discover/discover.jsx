import React from 'react';
import { Link } from 'react-router-dom';

class Discover extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchUsers();
        this.props.fetchSongs();
    }

    render() {
        const songs = this.props.songs ? this.props.songs : null;
        const users = this.props.users ? this.props.users : null;

        //set blm list
        const blm = songs && users ? (
            songs.map(song => {
                if (song.description.includes('#blm')) {
                    const artist = users[song.artist_id];
                    return (
                        <div key={song.id} className='scroll-menu-item'>
                            <Link to={`/songs/${song.id}`}>
                                <img src={song.coverURL} height='200px' width='200px' />
                            </Link>
                            <Link id='player-title' to={`/songs/${song.id}`}>{song.title}</Link>
                            <Link id='player-artist' to='/'>{artist.username}</Link>
                        </div>
                    )
                }
            })
        ) : null;

        //set trending list
        const trending = songs && users ? (
            songs.map(song => {
                if (song.description.includes('#trending')) {
                    const artist = users[song.artist_id];
                    return (
                        <div key={song.id} className='scroll-menu-item'>
                            <Link to={`/songs/${song.id}`}>
                                <img src={song.coverURL} height='200px' width='200px' />
                            </Link>
                            <Link id='player-artist' to='/'>{artist.username}</Link>
                            <Link id='player-title' to={`/songs/${song.id}`}>{song.title}</Link>
                        </div>
                    )
                }
            })
        ) : null;


        //set latin list
        const latin = songs && users ? (
            songs.map(song => {
                if (song.description.includes('#latin')) {
                    const artist = users[song.artist_id];
                    return (
                        <div key={song.id} className='scroll-menu-item'>
                            <Link to={`/songs/${song.id}`}>
                                <img src={song.coverURL} height='200px' width='200px' />
                            </Link>
                            <Link id='player-artist' to='/'>{artist.username}</Link>
                            <Link id='player-title' to={`/songs/${song.id}`}>{song.title}</Link>
                        </div>
                    )
                }
            })
        ) : null;

        //set bubble list
        const bubble = songs && users ? (
            songs.map(song => {
                if (song.description.includes('#bubbling')) {
                    const artist = users[song.artist_id];
                    return (
                        <div key={song.id} className='scroll-menu-item'>
                            <Link to={`/songs/${song.id}`}>
                                <img src={song.coverURL} height='200px' width='200px' />
                            </Link>
                            <Link id='player-artist' to='/'>{artist.username}</Link>
                            <Link id='player-title' to={`/songs/${song.id}`}>{song.title}</Link>
                        </div>
                    )
                }
            })
        ) : null;

        //set phony list
        const phony = songs && users ? (
            songs.map(song => {
                if (song.description.includes('#phony')) {
                    const artist = users[song.artist_id];
                    return (
                        <div key={song.id} className='scroll-menu-item'>
                            <Link to={`/songs/${song.id}`}>
                                <img src={song.coverURL} height='200px' width='200px'/>
                            </Link>
                            <Link id='player-artist' to='/'>{artist.username}</Link>
                            <Link id='player-title' to={`/songs/${song.id}`}>{song.title}</Link>
                        </div>
                    )
                }
            })
        ) : null;
       
        return (
            <div className='discover-div'>
                <h1 className='scroll-title'>CloudSound: Trending</h1>
                <p className='scroll-desc'>The most played tracks on SoundCloud this week</p>
                <div className='scroll-div'>
                    <div className='scroll-menu'>{trending}</div>
               </div>

                <h1 className='scroll-title'># BLACK LIVES MATTER</h1>
                <p className='scroll-desc'>Songs of empowerment and pride. Take action on racial injustice visit <a href="https://colorofchange.org">Color of Change</a></p>
                <div className='scroll-div'>
                    <div className='scroll-menu'>{blm}</div>
               </div>

                <h1 className='scroll-title'>Artist Spotlight: Phony Ppl</h1>
                <p className='scroll-desc'>Meet the stylistically daring R&amp;B/art-rock group went from a Crown Heights basement to international stages</p>
                <div className='scroll-div'>
                    <div className='scroll-menu'>{phony}</div>
               </div>

                <h1 className='scroll-title'>Latinx Songs of the Week</h1>
                <p className='scroll-desc'>The hottest music in the Latin World</p>
                <div className='scroll-div'>
                    <div className='scroll-menu'>{latin}</div>
               </div>

                <h1 className='scroll-title'>Bubbling Up</h1>
                <p className='scroll-desc'>Emerging new music and tomorrow's stars</p>
                <div className='scroll-div'>
                    <div className='scroll-menu'>{bubble}</div>
               </div>
            </div>
        )
    }
}

export default Discover;