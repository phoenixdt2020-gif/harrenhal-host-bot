import express from 'express';
import {
  InteractionType,
  InteractionResponseType,
  verifyKeyMiddleware,
} from 'discord-interactions';

const PORT = process.env.PORT || 3000;
const PUBLIC_KEY = process.env.PUBLIC_KEY;

if (!PUBLIC_KEY) {
  throw new Error('PUBLIC_KEY environment variable is required');
}

const app = express();

app.post('/interactions', verifyKeyMiddleware(PUBLIC_KEY), (req, res) => {
  const interaction = req.body;

  if (interaction.type === InteractionType.PING) {
    return res.send({ type: InteractionResponseType.PONG });
  }

  if (interaction.type === InteractionType.APPLICATION_COMMAND) {
    const { name } = interaction.data;

    if (name === 'attack') {
      return res.send({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: {
          content: '⚔️ **The Harrenhal Host** watches as you draw your steel to strike!',
        },
      });
    }
  }

  return res.status(400).send('Unknown interaction type');
});

app.listen(PORT, () => {
  console.log(`Harrenhal Host listening on port ${PORT}`);
});
