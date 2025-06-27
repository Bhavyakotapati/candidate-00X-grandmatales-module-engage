export async function POST(request) {
  const { story, prize } = await request.json();

  console.log("🎯 Feedback received:");
  console.log("Story:", story);
  console.log("Prize:", prize);

  return new Response(
    JSON.stringify({ message: 'Feedback saved successfully' }),
    { status: 200, headers: { 'Content-Type': 'application/json' } }
  );
}