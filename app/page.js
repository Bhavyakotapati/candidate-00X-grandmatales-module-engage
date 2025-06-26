export default function Home() {
  return (
    <main style={{ fontFamily: "sans-serif", padding: "2rem" }}>
      <h1>Welcome to Grandmatales</h1>
      <p>Explore the pages:</p>
      <ul>
        <li><a href="/terms">Terms</a></li>
        <li><a href="/faq">FAQ</a></li>
        <li><a href="/optout">Opt-Out</a></li>
      </ul>
    </main>
  );
}