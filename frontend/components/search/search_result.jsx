import React, { Component } from 'react'

export default class SearchResult extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.search(this.props.match.params.search);
    }

    render() {
        const users = this.props.users ? this.props.users.map(user => (
            <li>{user.username}</li>
        )) : <li>No users found. Narrow your search and try again.</li>

        const songs = this.props.songs ? this.props.songs.map(song => (
            <ul>
                <li>{song.title}</li>
                <li>{song.genre}</li>
                <li>{song.description}</li>
            </ul>
        )) : 'No songs found. Narrow your search and try again.'

        return (
            <div>
                <p>Showing search results for {this.props.match.params.search}</p>
                <div className='user-results'>
                    <h1>Users Found</h1>
                    <ul>
                        {users}
                    </ul>
                </div>

                <div className='song-results'>
                    <h1>Songs Found</h1>
                    {songs}
                </div>
            </div>
        )
    }
}
