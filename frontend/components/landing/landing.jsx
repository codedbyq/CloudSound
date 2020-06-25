import React from 'react';

class Landing extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchUsers();
        // this.props.fetchSongs();
    }
    
    render() {
        const songs = this.props.songs.map(song => (
            <li key={song.id}>song.title</li>
        ));
        const users = this.props.users.map(user => (
            <li key={user.id}>user.username</li>
        ));
        return (
            <div className={'landing-div'}>
                <div>
                    <ul>
                        {songs}
                    </ul>
                </div>

                <div>
                    <ul>
                        {users}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Landing;