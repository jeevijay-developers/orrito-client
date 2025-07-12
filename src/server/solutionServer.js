import apiClient from "@/service/axiosInstance";

// Fetch solutions by category from API or database
export async function getAllSolutionsByCategory(categoryName) {
  try {
    const res = await apiClient.get(`/api/v1/solutions/get-solution/${categoryName}`);
    return res.data || [];
  } catch (error) {
    throw error;
  }
}

// Fetch solution by ID from API or database
export async function getSolutionById(solutionId) {
  try {
    const res = await apiClient.get(`/api/v1/products/product/by-id/${solutionId}`);
    return res.data || null;
  } catch (error) {
    throw error;
  }
}
