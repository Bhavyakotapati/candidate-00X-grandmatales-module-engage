export async function POST(request) {
  const { story, prize } = await request.json();
  if (!story || !prize) {
    return new Response(
      JSON.stringify({ error: 'Please provide both answers.' }),
      { status: 400 }
    );
  }
  // Here you can save the data to a database, send an email, etc.
  console.log('Story:', story, 'Prize:', prize);
  return new Response(
    JSON.stringify({ message: 'Feedback received' }),
    { status: 200 }
  );
}