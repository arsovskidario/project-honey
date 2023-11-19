const baseUrl = "http://localhost:3030/jsonstore/"

export async function getAllProducts() {
    const response = await fetch(`${baseUrl}/featured`);
    if (!response.ok) {
        throw new Error('Service is unavaibable');
    }
    
    return response.json();
}

export async function getProductInfo(_id) {
    const url = `${baseUrl}/featured/${_id}`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Service is unavaibable');
    }
    
    return response.json();
}

export async function getProductReview(_id) {
    const url = `${baseUrl}/reviews/${_id}`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Service is unavaibable');
    }
    
    return response.json();
}



