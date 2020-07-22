import { connect } from 'react-redux';
import { search } from 'react-redux';
import SearchResult from './search_result';

const mapStateToProps = (state, ownProps) => {

    return {

    }
};

const mapDispatchToProps = dispatch => ({
    search: input => dispatch(search(input))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);