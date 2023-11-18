const baseUrl = "http://localhost:3030/jsonstore/products"

export async function getAllProducts() {
    const response = await fetch(baseUrl);
    if (!response.ok) {
        throw new Error('Service is unavaibable');
    }
    
    return response.json();
}