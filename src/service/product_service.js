import apiClient from "./axiosInstance";

export const getAllProducts = async (data) => {
    try {
        const res = await apiClient.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/products/all-products`, data);
        // console.log('Featured products data from getAllProducts controller: ', res.data);
        if (!res || !res.data) {
            console.error('No data found for featured products');
            return [];
        }
        return res.data;
    } catch (error) {
        console.error('Error fetching featured products: ', error);
        return [];
    }
}

export const getProductBySlug = async (slug) => {
    try {
        const res = await apiClient.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/products/product/by-slug/${slug}`);
        // console.log('Product data by slug: ', res.data);
        if (!res || !res.data) {
            console.error('No data found for product by slug');
            return null;
        }
        return res.data;
    } catch (error) {
        console.error('Error fetching product by slug: ', error);
        return null;
    }
}

export const getAllCategories = async () => {
    try {
        const res = await apiClient.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/categories/get-all-categories`);
        // console.log('All categories data: ', res.data);
        if (!res || !res.data) {
            console.error('No data found for categories');
            return [];
        }
        return res.data;
    } catch (error) {
        console.error('Error fetching product by slug: ', error);
        return null;
    }
}

export const getProductsByCategory = async (categoryId) => {
    try {
        const res = await apiClient.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/categories/get-category/${categoryId}`);
        return res.data;
    } catch (error) {
        console.error('Error fetching products by category: ', error);
        return [];   
    }
}
export const submitProductQuery = async (data) => {
    try {
        const res = await apiClient.post(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/query/submit-product-query`,
          data
        );
        console.log('Product query submission response: ', res.data);
      
        return res.data;
    } catch (error) {
        console.error('Error submitting product query: ', error);
        throw error;
    }
}       