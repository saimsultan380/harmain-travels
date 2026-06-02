export const dynamic = "force-dynamic";

export async function GET(request) {
  const body = null;
  console.log("Request body:", body);
  return Response.json({
    apiBase: process.env.NEXT_PUBLIC_API_BASE || "NOT SET",
    web3Key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY ? "SET" : "NOT SET",
    nodeEnv: process.env.NODE_ENV,
    allKeys: Object.keys(process.env)
      .filter((k) => k.includes("API") || k.includes("NEXT"))
      .reduce((acc, key) => {
        acc[key] = process.env[key] ? "SET" : "NOT SET";
        return acc;
      }, {}),
  });
}
