import apiClient from "./config";

export const getAllProductsByCategory = async (categoryName) => {
  try {
    const response = await apiClient.get(`/api/v1/categories/get-category/${categoryName}`);
    return response.data.products || [];
  } catch (error) {
    console.error('Error fetching products by category:', error);
    throw error;
  }
}

export const getProductBySlug = async (slug) => {
  try {
    const response = await apiClient.get(`/api/v1/products/product/by-slug/${slug}`);
    console.log("Response from getProductBySlug:", response);
    return response.data || null;
  } catch (error) {
    console.error('Error fetching product by slug:', error);
    throw error;
  }
}