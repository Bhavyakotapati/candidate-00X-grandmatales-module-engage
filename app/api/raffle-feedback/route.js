export async function POST(req) {
  const body = await req.json();

  console.log("Received feedback:", body);

  return new Response(JSON.stringify({ message: "Feedback received!" }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}