// ajax calls for user

export const fetchUser = (userId) => (
    $.ajax({
    method: 'get',
    url: `/api/users/${userId}`,
    data: { userId }
    })
);

export const fetchUsers = () => (
    $.ajax({
    method: 'get',
    url: '/api/users'
    })
);

export const createUser = user => (
    $.ajax({
    method: 'post',
    url: '/api/users',
    data: { user }
    })
);

