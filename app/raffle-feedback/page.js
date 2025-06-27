'use client';
import { useState } from 'react';

export default function OptionalEngagement() {
  const [selected, setSelected] = useState(null);
  const [story, setStory] = useState('');
  const [prize, setPrize] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/raffle-feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ story, prize }),
    });

    if (res.ok) {
      setSubmitted(true);
    } else {
      alert('Failed to submit.');
    }
  };

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Optional Engagement</h1>

      {!selected && (
        <>
          <p>Would you like to participate in this optional activity?</p>
          <button onClick={() => setSelected('yes')}>Yes, I want to participate</button>
          <button onClick={() => setSelected('no')} style={{ marginLeft: '1rem' }}>
            No, thanks
          </button>
        </>
      )}

      {selected === 'no' && <p>You selected: No — Thank you for your time!</p>}

      {selected === 'yes' && !submitted && (
        <form onSubmit={handleSubmit} style={{ marginTop: '2rem' }}>
          <p>You selected: Yes</p>
          <div style={{ marginBottom: '1rem' }}>
            <label>My favourite bedtime story is…</label><br />
            <input
              type="text"
              value={story}
              onChange={(e) => setStory(e.target.value)}
              required
              style={{ width: '100%', padding: '0.5rem' }}
            />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label>Suggest a prize you’d love to win</label><br />
            <input
              type="text"
              value={prize}
              onChange={(e) => setPrize(e.target.value)}
              required
              style={{ width: '100%', padding: '0.5rem' }}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      )}

      {submitted && <p>🎉 Thank you for your feedback!</p>}
    </main>
  );
}