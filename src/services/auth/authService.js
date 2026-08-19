const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const loginUser = async (credentials) => {
  try {
    if (!API_URL) {
      throw new Error("API_URL is not configured");
    }

    const response = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(credentials),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data?.message || "Login failed");
    }

    return data;
  } catch (error) {
    console.error("Login Error:", error);
    throw error;
  }
};

export const getCurrentUser = async () => {
  try {
    if (!API_URL) {
      throw new Error("API_URL is not configured");
    }

    const response = await fetch(`${API_URL}/auth/me`, {
      method: "GET",
      credentials: "include",
      cache: "no-store",
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data?.message || "Authentication failed");
    }

    return data;
  } catch (error) {
    console.error("Get Current User Error:", error);
    throw error;
  }
};
export const logoutUserAPI = async () => {
  try {
    if (!API_URL) {
      throw new Error("API_URL is not configured");
    }

    const response = await fetch(`${API_URL}/auth/me`, {
      method: "GET",
      credentials: "include",
      cache: "no-store",
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data?.message || "Authentication failed");
    }

    return data;
  } catch (error) {
    console.error("Get Current User Error:", error);
    throw error;
  }
};

