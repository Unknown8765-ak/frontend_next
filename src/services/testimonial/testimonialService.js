const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/testimonials`;

const handleResponse = async (response) => {
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data?.message || "Something went wrong");
  }

  return data;
};

export const getAllTestimonials = async () => {
  try {
    const response = await fetch(API_URL, {
      method: "GET",
      credentials: "include",
      cache: "no-store",
    });

    return await handleResponse(response);
  } catch (error) {
    console.error("Get Testimonials Error:", error);
    throw error;
  }
};

export const createTestimonial = async (formData) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      credentials: "include",
      body: formData,
    });

    return await handleResponse(response);
  } catch (error) {
    console.error("Create Testimonial Error:", error);
    throw error;
  }
};

export const updateTestimonial = async (id, formData) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PATCH",
      credentials: "include",
      body: formData,
    });

    return await handleResponse(response);
  } catch (error) {
    console.error("Update Testimonial Error:", error);
    throw error;
  }
};

export const deleteTestimonial = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
      credentials: "include",
    });

    return await handleResponse(response);
  } catch (error) {
    console.error("Delete Testimonial Error:", error);
    throw error;
  }
};