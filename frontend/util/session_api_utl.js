//ajax calls for user session

export const postSession = user => ({
    method: 'post',
    url: '/api/session',
    data: { user }
});

export const deleteSession = () => ({
    method: 'delete',
    url: 'api/session'
});