//ajax calls for user session

export const postSession = user => (
    $.ajax({
    method: 'post',
    url: '/api/session',
    data: { user }
    })
);

export const deleteSession = () => (
    $.ajax({
    method: 'delete',
    url: '/api/session'
    })
);

export const createUser = user => (
    $.ajax({
        method: 'post',
        url: '/api/users',
        data: { user }
    })
);
