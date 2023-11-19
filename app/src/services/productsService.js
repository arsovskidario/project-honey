const baseUrl = "http://localhost:3030/jsonstore/featured"

export async function getAllProducts() {
    const response = await fetch(baseUrl);
    if (!response.ok) {
        throw new Error('Service is unavaibable');
    }
    
    return response.json();
}

export async function getProductInfo(_id) {
    const url = `${baseUrl}/${_id}`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Service is unavaibable');
    }
    
    return response.json();
}

