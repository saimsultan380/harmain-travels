export const dynamic = "force-dynamic";

export async function GET(request) {
  try {
    const apiBase = process.env.NEXT_PUBLIC_API_BASE || process.env.API_BASE;
    if (!apiBase) {
      throw new Error("API base URL is not configured");
    }

    const response = await fetch(`${apiBase}/get_all_system_data`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const body = await response.text();
      throw new Error(`API returned ${response.status}: ${body}`);
    }

    const data = await response.json();
    return Response.json(data);
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
