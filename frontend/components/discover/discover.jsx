import React from 'react';
import Link from 'react-router-dom';

class Discover extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchUsers();
        this.props.fetchSongs();
    }

    render() {
        const songs = this.props.songs.map(song => (
            // <Link key={song.id} to={`/songs/${song.id}`}>{song.title}</Link>
            <li key={song.id}>{song.title}</li>
        ));
        const users = this.props.users.map(user => (
            <li key={user.id}>{user.username}</li>
        ));
        return (
            <div className={'discover-div'}>
                <ul className='songs'>
                    {songs}
                </ul>
                <ul className='users'>
                    {users}
                </ul>
            
              
            </div>
        )
    }
}

export default Discover;