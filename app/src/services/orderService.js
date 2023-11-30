const baseUrl = "http://localhost:3030/data"

export async function createOrder(data, token) {
    const url = `${baseUrl}/orders`;
    const response = await fetch(url,{
        method:'POST',
        headers: {
            "Content-Type": "application/json",
            "X-Authorization": token
        },
        body: JSON.stringify(data)
    })
    
    if (!response.ok) {
        throw new Error(response.status);
    }
    
    return response.json();
}

export async function getAllOrders() {
    const url = `${baseUrl}/orders`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Service is unavaibable');
    }
    
    return response.json();
}
