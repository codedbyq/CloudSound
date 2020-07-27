import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class SearchResult extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // this.props.search(this.props.match.params.search);
    }

    render() {
        const users = this.props.users ? this.props.users.map(user => (
            <li key={user.id}>{user.username}</li>
        )) : <li>No users found.</li>

        const songs = this.props.songs ? this.props.songs.map(song => (
            <li><Link key={song.id} to={`/songs/${song.id}`}>{song.title}</Link></li>
        )) : 'No songs found.';

        return (
            <div className='search-index'>
                <p className='search-header'>Showing search results for  
                    "<span className='bold'>{this.props.match.params.search}</span>"
                </p>
                <div className='user-results'>
                    <h1>Users Found</h1>
                    {users}
                </div>

                <div className='song-results'>
                    <h1>Songs Found</h1>
                    {songs}
                </div>
            </div>
        )
    }
}
