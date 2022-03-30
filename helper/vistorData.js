export const visitorData = (pageInfo)=>{
    let where = 'no data';
    console.log(pageInfo);
    fetch('https://api.ipfind.com/me?&auth=9f9a51cf-3a41-40c7-98b7-34b8d00c3e20')
        .then(res => res.json())
        .then(response => {
            where = response;
            postData({
                "whereFrom": where,
                "pageInfo" : pageInfo
            }, 'visits');
        })
        .catch((data, status) => {
        });
}

async function postData(data = {}, link) {
    // Default options are marked with *
    const response = await fetch('https://next-api-nu.vercel.app/api/' + link, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
}