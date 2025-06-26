"use client"; // This is required for using state and effects
import { useState, useEffect } from "react";

export default function OptOutPage() {
  const [countdown, setCountdown] = useState(5);
  const [canConfirm, setCanConfirm] = useState(false);
  const [optedOut, setOptedOut] = useState(false);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setCanConfirm(true);
    }
  }, [countdown]);

  return (
    <div style={{ fontFamily: "sans-serif", padding: "2rem" }}>
      <h1>Opt‑Out Confirmation</h1>
      {!optedOut ? (
        <>
          <p>Are you sure you want to opt out?</p>
          <p>Button will be enabled in: {countdown} seconds</p>
          <button
            disabled={!canConfirm}
            onClick={() => setOptedOut(true)}
            style={{
              padding: "0.5rem 1rem",
              backgroundColor: canConfirm ? "#4B2E39" : "#aaa",
              color: "white",
              borderRadius: "8px",
              border: "none",
              cursor: canConfirm ? "pointer" : "not-allowed",
              marginTop: "1rem",
            }}
          >
            Confirm
          </button>
        </>
      ) : (
        <h2>✅ You have opted out successfully!</h2>
      )}
    </div>
  );
}