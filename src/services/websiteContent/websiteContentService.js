const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/website-content`;

const handleResponse = async (response) => {
  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data?.message || "Something went wrong"
    );
  }

  return data;
};


export const getWebsiteContent = async (page) => {
  try {
    const response = await fetch(`${API_URL}/${page}`, {
      method: "GET",
      credentials: "include",
      cache: "no-store",
    });

    return await handleResponse(response);
  } catch (error) {
    console.error("Get Website Content Error:", error);
    throw error;
  }
};

export const updateHeroImage = async (page, formData) => {
  try {
    const response = await fetch(
      `${API_URL}/${page}/hero`,
      {
        method: "PATCH",
        credentials: "include",
        body: formData,
      }
    );

    return await handleResponse(response);
  } catch (error) {
    console.error("Update Hero Image Error:", error);
    throw error;
  }
};


export const updateCompanyImage = async (page, formData) => {
  try {
    const response = await fetch(
      `${API_URL}/${page}/company-image`,
      {
        method: "PATCH",
        credentials: "include",
        body: formData,
      }
    );

    return await handleResponse(response);
  } catch (error) {
    console.error("Update Company Image Error:", error);
    throw error;
  }
};

export const deleteCompanyImage = async (page) => {
  try {
    const response = await fetch(
      `${API_URL}/${page}/company-image`,
      {
        method: "DELETE",
        credentials: "include",
      }
    );

    return await handleResponse(response);
  } catch (error) {
    console.error("Delete Company Image Error:", error);
    throw error;
  }
};

export const addProject = async (formData) => {
  try {
    const response = await fetch(
      `${API_URL}/agency/project`,
      {
        method: "POST",
        credentials: "include",
        body: formData,
      }
    );

    return await handleResponse(response);
  } catch (error) {
    console.error("Add Project Error:", error);
    throw error;
  }
};

export const deleteProject = async (projectId) => {
  try {
    const response = await fetch(
      `${API_URL}/agency/project/${projectId}`,
      {
        method: "DELETE",
        credentials: "include",
      }
    );

    return await handleResponse(response);
  } catch (error) {
    console.error("Delete Project Error:", error);
    throw error;
  }
};