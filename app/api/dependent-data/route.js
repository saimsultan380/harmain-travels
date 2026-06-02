export const dynamic = "force-dynamic";

export async function POST(request) {
  try {
    const apiBase = process.env.NEXT_PUBLIC_API_BASE || process.env.API_BASE;
    if (!apiBase) {
      throw new Error("API base URL is not configured");
    }

    const body = await request.json();
    console.log("Request body:", body);

    const data_type = body?.data_type;
    const routes_pickup_id = body?.routes_pickup_id;
    let hotel_name = body?.hotel_name;

    if (data_type === "get_pickup_hotels") {
      hotel_name = "Makkah";
    }

    if (data_type === "get_dropoff_hotels") {
      hotel_name = "Madinah";
    }

    const requestBody = {
      data_type,
      hotel_name,
      routes_pickup_id,
    };

    const response = await fetch(`${apiBase}/get_dependent_bookings_data/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    console.log("Laravel response status:", response.status);
    const laravelText = await response.text();
    console.log("Laravel response:", laravelText);

    if (!response.ok) {
      return Response.json(
        {
          error: "Failed to fetch dependent data",
          laravel_status: response.status,
          laravel_response: laravelText,
          request_body: requestBody,
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
    console.error("Error fetching dependent data:", error);
    return Response.json(
      {
        error: `Failed to fetch dependent data: ${error instanceof Error ? error.message : "Unknown error"}`,
      },
      { status: 500 },
    );
  }
}
