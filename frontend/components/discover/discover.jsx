import React from 'react';
import Link from 'react-router-dom';

class Discover extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchUsers();
        this.props.fetchSongs();
        debugger
    }

    render() {
        const songs = this.props.songs ? this.props.songs : null;
        const users = this.props.users ? this.props.songs : null;

        const blm = songs.map(song => (
            if (song.)
        ))


        return (
            <div className='discover-div'>
                <div className='scroll-div'>
                    <h1 className='scroll-title'>CloudSound: Trending</h1>
                    <p className='scroll-desc'>The most played tracks on SoundCloud this week</p>
                    <div className='scroll-menu'></div>
               </div>

                <div className='scroll-div'>
                    <h1 className='scroll-title'># BLACK LIVES MATTER</h1>
                    <p className='scroll-desc'>Songs of empowerment and pride. Take action on racial injustice visit <a href="https://colorofchange.org">Color of Change</a></p>
                    <div className='scroll-menu'></div>
               </div>

                <div className='scroll-div'>
                    <h1 className='scroll-title'>Artist Spotlight: Phony Ppl</h1>
                    <p className='scroll-desc'>Meet the stylistically daring R&amp;B/art-rock group went from a Crown Heights basement to international stages</p>
                    <div className='scroll-menu'></div>
               </div>

                <div className='scroll-div'>
                    <h1 className='scroll-title'>Latinx Songs of the Week</h1>
                    <p className='scroll-desc'>The hottest music in the Latin World</p>
                    <div className='scroll-menu'></div>
               </div>

                <div className='scroll-div'>
                    <h1 className='scroll-title'>Bubbling Up</h1>
                    <p className='scroll-desc'>Emerging new music and tomorrow's stars</p>
                    <div className='scroll-menu'></div>
               </div>
            </div>
        )
    }
}

export default Discover;