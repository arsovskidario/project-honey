const baseUrl = "http://localhost:3030/data"

export async function getFeaturedProducts() {
    const response = await fetch(`${baseUrl}/products?sortBy=_createdOn%20desc`);
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

export async function createProduct(data, token) {
    const url = `${baseUrl}/products`;
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

export async function deleteProduct(_id, adminToken) {
    const url = `${baseUrl}/products/${_id}`;
    const response = await fetch(url,{
        method:'DELETE',
        headers: {
            "Content-Type": "application/json",
            "X-Admin": adminToken
        },
    });
    
    if (!response.ok) {
        throw new Error(response.status);
    }
    
    return response.json();
}

export async function editProductInfo(_id, details, token) {
    const url = `${baseUrl}/products/${_id}`;
    const response = await fetch(url,{
        method:'PUT',
        headers: {
            "Content-Type": "application/json",
            "X-Admin": token
        },
        body: JSON.stringify(details)
    });
    
    if (!response.ok) {
        throw new Error(response.status);
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

export async function getAllProducts() {
    const url = `${baseUrl}/products`;
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


export async function createProductReview(data, token) {
    const url = `${baseUrl}/reviews`;
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


