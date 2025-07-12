// Fetch solar products by category from API or database
import apiClient from "./config";

export const getAllSolarByID = async (categoryName) => {
  try {
    const response = await apiClient.get(
      `/api/v1/solar/get-solar/${encodeURIComponent(categoryName)}`
    );
    console.log("solar data", response.data.products);
    return response.data.products || [];
  } catch (error) {
    throw error;
  }
};

