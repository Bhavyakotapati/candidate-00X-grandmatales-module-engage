'use client';
import { useState } from 'react';

export default function EngagePage() {
  const [story, setStory] = useState('');
  const [prize, setPrize] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!story || !prize) {
      alert('Please fill in both fields.');
      return;
    }

    const res = await fetch('/api/raffle-feedback', {
      method: 'POST',
      body: JSON.stringify({ story, prize }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (res.ok) setSubmitted(true);
    else alert('Something went wrong. Please try again.');
  };

  if (submitted) {
    return <p>Thanks for participating!</p>;
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: 400 }}>
      <label>
        My favourite bedtime story is…
        <input value={story} onChange={(e) => setStory(e.target.value)} required />
      </label>
      <label>
        Suggest a prize you’d love to win:
        <input value={prize} onChange={(e) => setPrize(e.target.value)} required />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}