const express = require('express');
const cors = require('cors');
const { OpenAI } = require('openai');
require('dotenv').config({ path: __dirname + '/.env' });  // <- THIS is the one you edit

const app = express();
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post('/api/generate', async (req, res) => {
  const { message } = req.body;

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: message }],
      max_tokens: 256,
    });

    res.json({ response: completion.choices[0].message.content });
  } catch (error) {
    console.error('Error calling OpenAI:', error);
    res.status(500).json({ error: 'Failed to generate response' });
  }
});


app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
