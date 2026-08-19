const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/gallery`;

export const uploadGalleryImage = async (formData) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      credentials: "include",
      body: formData,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to upload gallery image");
    }

    return data;
  } catch (error) {
    console.error("Upload Gallery Error:", error);
    throw error;
  }
};

// Get All Gallery Images
export const getAllGalleryImages = async () => {
  try {
    const response = await fetch(API_URL, {
      method: "GET",
      cache: "no-store",
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to fetch gallery images");
    }

    return data;
  } catch (error) {
    console.error("Get Gallery Error:", error);
    throw error;
  }
};

// Update Gallery Image
export const updateGalleryImage = async (id, formData) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PATCH",
      credentials: "include",
      body: formData,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to update gallery image");
    }

    return data;
  } catch (error) {
    console.error("Update Gallery Error:", error);
    throw error;
  }
};

// Delete Gallery Image
export const deleteGalleryImage = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
      credentials: "include",
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to delete gallery image");
    }

    return data;
  } catch (error) {
    console.error("Delete Gallery Error:", error);
    throw error;
  }
};