const baseUrl = "http://localhost:3030"

export async function createSubscription(data) {
    const url = `${baseUrl}/jsonstore/newsletter`;
    const response = await fetch(url,{
        method:'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    })
    
    if (!response.ok) {
        throw new Error(response.status);
    }
    
    return response.json();
}