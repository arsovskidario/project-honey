const baseUrl = "http://localhost:3030/data"

export async function getFeaturedProducts() {
    const response = await fetch(`${baseUrl}/products?sortBy=createdOn%20desc`);
    if (!response.ok) {
        throw new Error('Service is unavaibable');
    }
    
    return response.json();
}

export async function getProductsPageInfo(page) {
    const response = await fetch(`${baseUrl}/products?where=category%3D%22${page}%22`);
    if (!response.ok) {
        throw new Error('Service is unavaibable');
    }
    
    return response.json();
}

export async function getProductInfo(_id) {
    const url = `${baseUrl}/products/${_id}`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Service is unavaibable');
    }
    
    return response.json();
}

export async function getProductReview(_id) {
    const url = `${baseUrl}/reviews?where=productId%3D%22${_id}%22`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(response.status);
    }
    
    return response.json();
}


export async function createProductReview(_id) {
    const url = `${baseUrl}/reviews?where=productId%3D%22${_id}%22`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(response.status);
    }
    
    return response.json();
}



