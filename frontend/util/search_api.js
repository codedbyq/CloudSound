// ajax calls for search calls

export const search = input => (
    $.ajax({
        method: 'get',
        url: `/api/searches/${input}`,
        data: { input } 
    })
)