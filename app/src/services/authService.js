const baseUrl = "http://localhost:3030/users"

export async function loginUser(userDetails) {
    const response = await fetch(`${baseUrl}/login`, {
        method:'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userDetails)
    });
    
    if (!response.ok) {
        throw new Error(response.status);
    }
    return response.json();
}


export async function registerUser(userDetails) {
    const response = await fetch(`${baseUrl}/register`,{
        method:'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userDetails)
    })

    if(!response.ok){
        throw new Error(response.status);
    }

    return response.json();
}

export async function createUserDetails(userDetails, token) {
    const url = `http://localhost:3030/data/userDetails`;
    const response = await fetch(url,{
        method:'POST',
        headers: {
            "Content-Type": "application/json",
            "X-Authorization": token
        },
        body: JSON.stringify(userDetails)
    })
    
    if (!response.ok) {
        throw new Error(response.status);
    }
    
    return response.json();
}

export async function getUserDetailsByUsername(username) {
    const url = `http://localhost:3030/data/userDetails?where=username%3D%22${username}%22`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Service is unavaibable');
    }
    
    return response.json();
}