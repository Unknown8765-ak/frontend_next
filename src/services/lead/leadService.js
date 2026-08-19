const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/leads`;

const handleResponse = async (response, defaultMessage) => {
  let data;

  try {
    data = await response.json();
  } catch {
    throw new Error(defaultMessage);
  }

  if (!response.ok) {
    throw new Error(data?.message || defaultMessage);
  }

  return data;
};

export const createLead = async (leadData) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(leadData),
    });

    return await handleResponse(
      response,
      "Failed to create lead"
    );
  } catch (error) {
    console.error("Create Lead Error:", error);
    throw error;
  }
};

export const getAllLeads = async () => {
  try {
    const response = await fetch(API_URL, {
      method: "GET",
      credentials: "include",
      cache: "no-store",
    });

    return await handleResponse(
      response,
      "Failed to fetch leads"
    );
  } catch (error) {
    console.error("Get Leads Error:", error);
    throw error;
  }
};

export const getSingleLead = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "GET",
      credentials: "include",
      cache: "no-store",
    });

    return await handleResponse(
      response,
      "Failed to fetch lead"
    );
  } catch (error) {
    console.error("Get Lead Error:", error);
    throw error;
  }
};

export const updateLeadStatus = async (id, status) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PATCH",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status }),
    });

    return await handleResponse(
      response,
      "Failed to update lead"
    );
  } catch (error) {
    console.error("Update Lead Error:", error);
    throw error;
  }
};

export const deleteLead = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
      credentials: "include",
    });

    return await handleResponse(
      response,
      "Failed to delete lead"
    );
  } catch (error) {
    console.error("Delete Lead Error:", error);
    throw error;
  }
};