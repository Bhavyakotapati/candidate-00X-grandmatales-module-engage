'use client';
import { useState } from 'react';

export default function EngagePage() {
  const [story, setStory] = useState('');
  const [prize, setPrize] = useState('');

  const handleSubmit = async () => {
    const res = await fetch('/api/raffle-feedback', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ favoriteBedtimeStory: story, suggestedPrize: prize})
    });
    alert(res.ok ? 'Thank you for submitting!' : 'Submission failed');
  };

  return (
    <div>
      <h1>Optional Engagement</h1>

      <div>
        <label>My favorite bedtime story is:</label>
        <input value={story} onChange={(e) => setStory(e.target.value)} />
      </div>

      <div>
        <label>Suggest a prize you'd love to win:</label>
        <input value={prize} onChange={(e) => setPrize(e.target.value)} />
      </div>

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
