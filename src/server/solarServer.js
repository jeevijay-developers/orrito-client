// Fetch solar products by category from API or database
export async function getAllSolarByCategory(categoryName) {
  try {
    // Replace with your actual API endpoint or DB query
    const res = await fetch(`/api/v1/solar?category=${encodeURIComponent(categoryName)}`);
    if (!res.ok) throw new Error('Failed to fetch solar products');
    const data = await res.json();
    return data.products || [];
  } catch (error) {
    throw error;
  }
}
