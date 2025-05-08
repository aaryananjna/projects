// src/openai.js
export async function sendMsgToOpenAI(message) {
  const response = await fetch('https://chatbot-clone-real.onrender.com/api/generate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ message }),
  });
  
  const data = await response.json();
  return data.response;
}
