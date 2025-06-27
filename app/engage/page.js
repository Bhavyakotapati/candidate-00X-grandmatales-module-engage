"use client";

import { useState } from "react";

export default function EngagePage() {
  const [selected, setSelected] = useState(null);
  const [story, setStory] = useState("");
  const [prize, setPrize] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async () => {
    if (!story || !prize) return alert("Please fill both fields.");
    const res = await fetch("/api/raffle-feedback", {
      method: "POST",
      body: JSON.stringify({ story, prize }),
    });
    if (res.ok) setSubmitted(true);
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Optional Engagement</h1>
      <p>Would you like to participate in this optional activity?</p>
      {!selected ? (
        <div>
          <button onClick={() => setSelected("yes")}>Yes, I want to participate</button>
          <button onClick={() => setSelected("no")}>No, thanks</button>
        </div>
      ) : selected === "no" ? (
        <p>You selected: No</p>
      ) : submitted ? (
        <p>Thank you for participating!</p>
      ) : (
        <div style={{ marginTop: "1rem" }}>
          <p>You selected: Yes</p>
          <label>
            Your favourite bedtime story:
            <br />
            <input
              value={story}
              onChange={(e) => setStory(e.target.value)}
              style={{ width: "100%", marginBottom: "1rem" }}
            />
          </label>
          <br />
          <label>
            Suggest a prize you’d love to win:
            <br />
            <input
              value={prize}
              onChange={(e) => setPrize(e.target.value)}
              style={{ width: "100%", marginBottom: "1rem" }}
            />
          </label>
          <br />
          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}
    </div>
  );
}