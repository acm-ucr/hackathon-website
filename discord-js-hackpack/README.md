# Discord Javascript Hackpack

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)

## Node.js

Discord Javascript Hackpack runs on Node.js Version 20.10.0 and higher. Please ensure you have Node.js installed via the [official website](https://nodejs.org/en).

## Discord.js

[Discord.js](https://discord.js.org/) is a Node.js module allowing easy interactions with the Discord API.

## Environment Variables

The following environment variables are required and must be stored in an `.env` file:

```env
DISCORD_TOKEN=
```

## Commands

### Dependencies

```bash
# Install dependencies
npm i

# Add dependency
npm i <dependency>

# Remove dependency
npm un <dependency>
```

### Running the Bot Locally

```bash
npm run bot
```

### Formatting Code via Prettier

```bash
# Rewrite code recursively with proper formatting
npm run format

# Show formatting differences recursively
npm run check
```

### Linting Code via Eslint

```bash
npm run eslint
```
