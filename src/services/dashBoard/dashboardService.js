const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/dashboard`;

export const getDashboardData = async () => {
  try {
    const response = await fetch(API_URL, {
      method: "GET",
      credentials: "include",
      cache: "no-store",
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.message || "Failed to fetch dashboard data"
      );
    }

    return data;
  } catch (error) {
    console.error("Get Dashboard Error:", error);
    throw error;
  }
};