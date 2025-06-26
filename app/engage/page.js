'use client';
import { useState } from 'react';

export default function EngagePage() {
  const [story, setStory] = useState('');
  const [prize, setPrize] = useState('');
  const [status, setStatus] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await fetch('/api/raffle-feedback', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ story, prize }),
    });
    if (res.ok) {
      setStatus('Thank you! Your answers have been saved.');
      setStory('');
      setPrize('');
    } else {
      setStatus('Error submitting your feedback. Try again.');
    }
  }

  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-2xl font-bold">Optional Engagement</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label>My favorite bedtime story is:</label>
          <input
            value={story}
            onChange={(e) => setStory(e.target.value)}
            className="w-full p-2 mt-1 border rounded"
            required
            placeholder="Enter your favorite story..."
          />
        </div>
        <div className="mb-4">
          <label>Suggest a prize you’d love to win:</label>
          <input
            value={prize}
            onChange={(e) => setPrize(e.target.value)}
            className="w-full p-2 mt-1 border rounded"
            required
            placeholder="Enter a prize..."
          />
        </div>
        <button className="bg-blue-600 text-white p-2 rounded" type="submit">Submit</button>
      </form>
      {status && <p className="mt-2">{status}</p>}
    </div>
  );
}