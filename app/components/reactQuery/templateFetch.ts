const BASE_URL = 'https://pchapi-dev.primeitclub.com/api/v1'

export async function api( endpoint:string,options?:RequestInit ) {

    const res = await fetch(`${BASE_URL}${endpoint}`,{
        headers:{"Content-Type": "application/json"},
        ...options,
    })

    if(!res.ok) throw new Error(await res.text());

    return res.json();

}

