export async function POST(request) {
  const data = await request.json();
  console.log(data);
  return new Response(
    JSON.stringify({ message: 'Success' }),
    {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    }
  );
}