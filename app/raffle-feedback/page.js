'use client';
import { useState } from 'react';

export default function RaffleFeedback() {
  const [selection, setSelection] = useState('');
  const [form, setForm] = useState({ story: '', prize: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async () => {
    await fetch('/api/raffle-feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    setSubmitted(true);
  };

  if (submitted) {
    return <p>Thank you for participating!</p>;
  }

  return (
    <div>
      <h1>Optional Engagement</h1>
      <p>Would you like to participate in this optional activity?</p>
      {!selection && (
        <>
          <button onClick={() => setSelection('yes')}>Yes, I want to participate</button>
          <button onClick={() => setSelection('no')}>No, thanks</button>
        </>
      )}
      {selection === 'no' && <p>You selected: no</p>}
      {selection === 'yes' && (
        <div>
          <p>You selected: yes</p>
          <label>
            My favourite bedtime story is:
            <input
              type="text"
              value={form.story}
              onChange={(e) => setForm({ ...form, story: e.target.value })}
            />
          </label>
          <br />
          <label>
            Suggest a prize you'd love to win:
            <input
              type="text"
              value={form.prize}
              onChange={(e) => setForm({ ...form, prize: e.target.value })}
            />
          </label>
          <br />
          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}
    </div>
  );
}