const baseUrl = "http://localhost:3030/users/login"

export async function loginUser(userDetails) {
    const response = await fetch(baseUrl, {
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
