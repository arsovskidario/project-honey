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