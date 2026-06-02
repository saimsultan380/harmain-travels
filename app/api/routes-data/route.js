export const dynamic = "force-dynamic";

export async function POST(request) {
  try {
    const apiBase = process.env.NEXT_PUBLIC_API_BASE || process.env.API_BASE;
    if (!apiBase) {
      throw new Error("API base URL is not configured");
    }

    const body = await request.json();
    console.log("Request body:", body);

    const response = await fetch(`${apiBase}/get_routes_data/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    console.log("Laravel response status:", response.status);
    const laravelText = await response.text();
    console.log("Laravel response:", laravelText);

    if (!response.ok) {
      return Response.json(
        {
          error: "Failed to fetch routes data",
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
    console.error("Error fetching routes data:", error);
    return Response.json(
      {
        error: `Failed to fetch routes data: ${error instanceof Error ? error.message : "Unknown error"}`,
      },
      { status: 500 },
    );
  }
}
