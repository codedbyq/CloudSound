// ajax calls for search calls

export const getSearch = input => (
    $.ajax({
        method: 'get',
        url: `/api/searches/${input}`,
        data: { input } 
    })
)