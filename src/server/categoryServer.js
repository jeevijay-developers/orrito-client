import apiClient from "./config";

export const getAllProductsByCategory = async (categoryName) => {
  try {
    const response = await apiClient.get(`/api/v1/categories/get-category/${categoryName}`);

    if (response.status !== 200) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.data.products || [];
  } catch (error) {
    console.error('Error fetching products by category:', error);
    throw error;
  }
}