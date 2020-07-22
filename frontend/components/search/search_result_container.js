import { connect } from 'react-redux';
import { search } from 'react-redux';
import SearchResult from './search_result';

const mapStateToProps = (state, ownProps) => {
    const users = state.entities.search.users;
    const songs = state.entities.search.songs;

    const usersArr = users ? Object.values(users) : null;
    const songsArr = songs ? Object.values(songs) : null;

    return {
        users: usersArr,
        songs: songsArr,
    }
};

const mapDispatchToProps = dispatch => ({
    search: input => dispatch(search(input))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);