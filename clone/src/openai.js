import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: "REMOVED", // ⚠️ WARNING: don't expose this in frontend!
  dangerouslyAllowBrowser: true, // Required if using in frontend (but still unsafe)
});

export async function sendMsgToOpenAI(message) {
  const res = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [{ role: "user", content: message }],
    temperature: 0.7,
    max_tokens: 256,
  });

  return res.choices[0].message.content;
}
