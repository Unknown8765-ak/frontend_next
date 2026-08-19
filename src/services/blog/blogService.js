const BASE_URL = `${process.env.NEXT_PUBLIC_API_URL}/blogs`;



const handleResponse = async (response, defaultMessage) => {
  let data = {};

  try {
    data = await response.json();
  } catch {
    data = {};
  }

  if (!response.ok) {
    throw new Error(
      data?.message || defaultMessage
    );
  }

  return data;
};


export const createBlog = async (formData) => {
  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      credentials: "include",
      body: formData,
    });

    return await handleResponse(
      response,
      "Failed to create blog."
    );
  } catch (error) {
    console.error("Create Blog Error:", error);

    throw new Error(
      error.message ||
        "Something went wrong while creating the blog."
    );
  }
};


export const getAllBlogs = async (query = {}) => {
  try {
    const queryString = new URLSearchParams(
      query
    ).toString();

    const url = queryString
      ? `${BASE_URL}?${queryString}`
      : BASE_URL;

    const response = await fetch(url, {
      method: "GET",
      credentials: "include",
    });

    return await handleResponse(
      response,
      "Failed to fetch blogs."
    );
  } catch (error) {
    console.error("Get Blogs Error:", error);

    throw new Error(
      error.message ||
        "Something went wrong while fetching blogs."
    );
  }
};


export const getBlogBySlug = async (slug) => {
  try {
    if (!slug) {
      throw new Error("Blog slug is required.");
    }

    const response = await fetch(
      `${BASE_URL}/${encodeURIComponent(slug)}`,
      {
        method: "GET",
        credentials: "include",
      }
    );

    return await handleResponse(
      response,
      "Failed to fetch blog."
    );
  } catch (error) {
    console.error("Get Blog Error:", error);

    throw new Error(
      error.message ||
        "Something went wrong while fetching the blog."
    );
  }
};


export const updateBlog = async (
  id,
  formData
) => {
  try {
    if (!id) {
      throw new Error("Blog ID is required.");
    }

    const response = await fetch(
      `${BASE_URL}/${id}`,
      {
        method: "PUT",
        credentials: "include",
        body: formData,
      }
    );

    return await handleResponse(
      response,
      "Failed to update blog."
    );
  } catch (error) {
    console.error("Update Blog Error:", error);

    throw new Error(
      error.message ||
        "Something went wrong while updating the blog."
    );
  }
};


export const deleteBlog = async (id) => {
  try {
    if (!id) {
      throw new Error("Blog ID is required.");
    }

    const response = await fetch(
      `${BASE_URL}/${id}`,
      {
        method: "DELETE",
        credentials: "include",
      }
    );

    return await handleResponse(
      response,
      "Failed to delete blog."
    );
  } catch (error) {
    console.error("Delete Blog Error:", error);

    throw new Error(
      error.message ||
        "Something went wrong while deleting the blog."
    );
  }
};