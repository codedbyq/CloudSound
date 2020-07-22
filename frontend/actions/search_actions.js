import { getSearch } from '../util/search_api';

export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS';

const receiveSearchResults = results => ({
    type: RECEIVE_SEARCH_RESULTS, 
    results
});

export const search = input => dispatch => (
    getSearch(input).then(results => dispatch(receiveSearchResults(results)))
)