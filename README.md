# harrenhal-host-bot
⚔️ Welcome to Harrenhal, traveler. Wealth and death await within these haunted walls. The Harrenhal Host transforms your server into a dangerous Westerosi battlefield. Forage through the crumbling ruins, establish your house, and fight for survival in the Riverlands. Will you rise to become the Lord Protector.

## Run the interaction server

Requires Node.js 18 or newer.

1. Install dependencies with `npm install`.
2. Set `PUBLIC_KEY` to your Discord application's public key.
3. Start the server with `npm start` (it listens on `PORT`, or port `3000` by default).
4. Set the Discord application's Interactions Endpoint URL to `https://<your-host>/interactions`.

The `/attack` application command must also be registered with Discord before it can be used.
