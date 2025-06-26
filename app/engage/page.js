"use client";

import { useState } from 'react';

export default function Engage() {
  const [story, setStory] = useState('');
  const [prize, setPrize] = useState('');

  async function handleSubmit() {
    await fetch("/api/raffle-feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ story, prize }),
    });
    alert("Thank you! Your responses were saved.");
  }

  return (
    <div style={{ fontFamily: "sans-serif", padding: "20px" }}>
      <h1>Optional Engagement</h1>
      <div>
        <label>My favorite bedtime story is…</label><br/>
        <input value={story} onChange={(e) => setStory(e.target.value)} />
      </div>
      <div>
        <label>Suggest a prize you’d love to win:</label><br/>
        <input value={prize} onChange={(e) => setPrize(e.target.value)} />
      </div>
      <button onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}