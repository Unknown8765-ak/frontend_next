const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const sendContactMessage = async (formData) => {
  try {
    const response = await fetch(`${API_URL}/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data?.message || "Failed to send contact message"
      );
    }

    return data;
  } catch (error) {
    console.error("Send Contact Message Error:", error);
    throw error;
  }
};