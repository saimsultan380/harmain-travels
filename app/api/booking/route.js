export const dynamic = "force-dynamic";

export async function POST(request) {
  try {
    const apiBase = process.env.NEXT_PUBLIC_API_BASE || process.env.API_BASE;
    if (!apiBase) {
      throw new Error("API base URL is not configured");
    }

    const body = await request.json();
    console.log("Request body:", body);

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

    console.log("Laravel response status:", response.status);
    const laravelText = await response.text();
    console.log("Laravel response:", laravelText);

    if (!response.ok) {
      return Response.json(
        {
          error: "Failed to create booking",
          laravel_status: response.status,
          laravel_response: laravelText,
          request_body: body,
        },
        { status: response.status },
      );
    }

    try {
      const data = JSON.parse(laravelText);
      return Response.json(data);
    } catch {
      return Response.json({ raw: laravelText });
    }
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
