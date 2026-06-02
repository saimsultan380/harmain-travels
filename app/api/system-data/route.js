export const dynamic = "force-dynamic";

export async function GET(request) {
  try {
    const apiBase = process.env.NEXT_PUBLIC_API_BASE || process.env.API_BASE;
    if (!apiBase) {
      throw new Error("API base URL is not configured");
    }

    const body = null;
    console.log("Request body:", body);

    const response = await fetch(`${apiBase}/get_all_system_data`, {
      method: "GET",
    });

    console.log("Laravel response status:", response.status);
    const laravelText = await response.text();
    console.log("Laravel response:", laravelText);

    if (!response.ok) {
      return Response.json(
        {
          error: "Failed to fetch system data",
          laravel_status: response.status,
          laravel_response: laravelText,
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
    console.error("Error fetching system data:", error);
    return Response.json(
      {
        error: `Failed to fetch system data: ${error instanceof Error ? error.message : "Unknown error"}`,
      },
      { status: 500 },
    );
  }
}
