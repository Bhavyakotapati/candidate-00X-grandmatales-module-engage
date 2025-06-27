export async function POST(req) {
  const body = await req.json();
  const { story, prize } = body;

  if (!story || !prize) {
    return new Response(JSON.stringify({ error: 'Both fields required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // For now, just log to server (in real app, you'd store this)
  console.log('Received raffle feedback:', body);

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}