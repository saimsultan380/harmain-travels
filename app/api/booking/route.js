export const dynamic = "force-dynamic";

export async function POST(request) {
  try {
    const apiBase = process.env.NEXT_PUBLIC_API_BASE || process.env.API_BASE;
    if (!apiBase) {
      throw new Error("API base URL is not configured");
    }

    const body = await request.json();

    // Convert to form-urlencoded format
    const formData = new URLSearchParams();

    Object.entries(body).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((v) => {
          formData.append(key, v);
        });
      } else if (value !== null && value !== undefined) {
        formData.append(key, String(value));
      }
    });

    const response = await fetch(`${apiBase}/bookings_add_plugin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData.toString(),
    });

    if (!response.ok) {
      const text = await response.text();
      throw new Error(`API returned ${response.status}: ${text}`);
    }

    const data = await response.json();
    return Response.json(data);
  } catch (error) {
    console.error("Error creating booking:", error);
    return Response.json(
      {
        error: `Failed to create booking: ${error instanceof Error ? error.message : "Unknown error"}`,
      },
      { status: 500 },
    );
  }
}
