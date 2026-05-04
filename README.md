# Basic Discord Bot

A simple Discord bot that uses `!` commands.

Example:

```txt
!Welcome
```

The bot replies:

```txt
Welcome to my server
```

## Files

```txt
basic-discord-bot/
├── src/
│   └── index.js
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

## Setup

### 1. Create your Discord bot

1. Go to the Discord Developer Portal.
2. Create a new application.
3. Go to **Bot**.
4. Create/reset the bot token and copy it.
5. Enable **Message Content Intent** under privileged gateway intents.

### 2. Invite the bot to your server

In the Developer Portal:

1. Go to **OAuth2** → **URL Generator**.
2. Select `bot`.
3. Select these bot permissions:
   - View Channels
   - Send Messages
   - Read Message History
4. Open the generated URL and invite the bot to your server.

### 3. Run locally

Install Node.js 20 or newer, then run:

```bash
npm install
cp .env.example .env
```

Open `.env` and replace `put_your_bot_token_here` with your actual Discord bot token.

Then start the bot:

```bash
npm start
```

### 4. Upload to GitHub

```bash
git init
git add .
git commit -m "Initial Discord bot"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

Do not upload your `.env` file. It is already ignored by `.gitignore`.

## Add more commands

Open `src/index.js` and edit this section:

```js
const commands = {
  welcome: 'Welcome to my server',
  help: `Commands available: ${PREFIX}Welcome, ${PREFIX}help`
};
```

For example:

```js
const commands = {
  welcome: 'Welcome to my server',
  rules: 'Please be respectful and follow the server rules.',
  socials: 'Follow us at https://example.com',
  help: `Commands available: ${PREFIX}Welcome, ${PREFIX}rules, ${PREFIX}socials, ${PREFIX}help`
};
```

Then you can use:

```txt
!rules
!socials
```

## Hosting note

GitHub is great for storing the bot code, but a Discord bot must be running somewhere to stay online. You can run it from your computer while testing, or host it on a service that supports Node.js apps.
