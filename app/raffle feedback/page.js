'use client';
import { useState } from 'react';

export default function RaffleFeedback() {
  const [choice, setChoice] = useState(null);
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
      alert('Error submitting feedback');
    }
  };

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Optional Engagement</h1>

      {!choice && (
        <>
          <p>Would you like to participate in this optional activity?</p>
          <button onClick={() => setChoice('yes')}>Yes, I want to participate</button>
          <button onClick={() => setChoice('no')} style={{ marginLeft: '1rem' }}>No, thanks</button>
        </>
      )}

      {choice === 'no' && <p>You selected: No — Thank you!</p>}

      {choice === 'yes' && !submitted && (
        <form onSubmit={handleSubmit} style={{ marginTop: '1rem' }}>
          <p>You selected: Yes</p>
          <label>
            My favourite bedtime story is…<br />
            <input
              type="text"
              value={story}
              onChange={(e) => setStory(e.target.value)}
              required
              style={{ width: '100%', padding: '0.5rem' }}
            />
          </label>
          <br /><br />
          <label>
            Suggest a prize you’d love to win:<br />
            <input
              type="text"
              value={prize}
              onChange={(e) => setPrize(e.target.value)}
              required
              style={{ width: '100%', padding: '0.5rem' }}
            />
          </label>
          <br /><br />
          <button type="submit">Submit</button>
        </form>
      )}

      {submitted && (
        <p style={{ marginTop: '1rem' }}>🎉 Thank you for your feedback!</p>
      )}
    </main>
  );
}