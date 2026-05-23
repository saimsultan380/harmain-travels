export const dynamic = "force-dynamic";

export async function POST(request) {
  try {
    const apiBase = process.env.NEXT_PUBLIC_API_BASE || process.env.API_BASE;
    if (!apiBase) {
      throw new Error("API base URL is not configured");
    }

    const body = await request.json();

    const response = await fetch(`${apiBase}/get_routes_data`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const text = await response.text();
      throw new Error(`API returned ${response.status}: ${text}`);
    }

    const data = await response.json();
    return Response.json(data);
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
