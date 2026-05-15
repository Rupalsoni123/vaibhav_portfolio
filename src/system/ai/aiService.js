// All AI calls go through the server-side proxy at /api/ai.
// No API key, model name, or system prompt is ever shipped to the browser.

export const askAI = async (message) => {
  if (!message || typeof message !== "string") {
    return "Please enter a question.";
  }
  const trimmed = message.trim().slice(0, 600);
  if (!trimmed) {
    return "Please enter a question.";
  }

  try {
    const res = await fetch("/api/ai", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: trimmed }),
    });

    if (res.status === 429) {
      const data = await res.json().catch(() => ({}));
      return (
        data.reply ||
        "You've asked a few questions already — let's pause for a minute so I can give every visitor a fair turn. Please try again shortly."
      );
    }
    if (!res.ok) {
      return "AI is temporarily unavailable. Try Vaibhav's LinkedIn or email.";
    }
    const data = await res.json().catch(() => ({}));
    return data.reply || "No response received.";
  } catch (err) {
    console.error("AI client error:", err);
    return "AI is temporarily unavailable. Try Vaibhav's LinkedIn or email.";
  }
};
