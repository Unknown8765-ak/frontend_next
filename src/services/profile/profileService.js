const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/profile`;

const handleResponse = async (response) => {
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data?.message || "Something went wrong");
  }

  return data;
};

export const getProfile = async () => {
  try {
    const response = await fetch(API_URL, {
      method: "GET",
      credentials: "include",
      cache: "no-store",
    });

    return await handleResponse(response);
  } catch (error) {
    console.error("Get Profile Error:", error);
    throw error;
  }
};

export const updateProfile = async (formData) => {
  try {
    const response = await fetch(API_URL, {
      method: "PATCH",
      credentials: "include",
      body: formData,
    });

    return await handleResponse(response);
  } catch (error) {
    console.error("Update Profile Error:", error);
    throw error;
  }
};

export const changePassword = async ({
  oldPassword,
  newPassword,
}) => {
  try {
    const response = await fetch(
      `${API_URL}/change-password`,
      {
        method: "PATCH",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          oldPassword,
          newPassword,
        }),
      }
    );

    return await handleResponse(response);
  } catch (error) {
    console.error("Change Password Error:", error);
    throw error;
  }
};