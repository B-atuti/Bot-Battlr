# Bot-Battlr

Welcome to Bot Battlr, the one and only spot in the known universe where you can custom build your own Bot Army! This is our React application that allows you to browse through a list of robots, view a robot's details, and enlist a bot into your army.

## Table of Contents

- [Introduction](#introduction)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)

## Introduction

For this project, we have built a React application that displays a list of available bots, and you can enlist a bot into your army by clicking on it. The enlisted bots are displayed in your bot army, and you can release a bot from your army if needed. Additionally, you have the option to permanently discharge a bot from the backend and your army.

## Requirements

To run this application locally, you will need the following installed on your system:

- Node.js (https://nodejs.org/)
- npm (Node Package Manager, usually comes with Node.js)

## Installation

1. Clone this repository to your local machine:
git clone https://github.com/B-atuti/bot-battlr.git

2. Navigate to the project directory:
cd bot-battlr

3. Install the project dependencies:
npm install


## Usage

1. Start the JSON DB server to provide data for the application:
json-server --watch db.json --port 8001

2. Start the React development server:
npm start
 
3. Open your web browser and navigate to http://localhost:3000 to access the Bot Battlr application.

## API Endpoints

The application fetches data from the JSON DB server. The available endpoints are:

- `GET /bots`: Fetches the list of available bots.
- `DELETE /bots/:id`: Deletes a bot with the specified ID from the server.

## Features

As a user, you can:

- See profiles of all bots rendered in `BotCollection`.
- Add an individual bot to your army by clicking on it. The selected bot will render in the `YourBotArmy` component. The bot can be enlisted only once, and it does not disappear from the `BotCollection`.
- Release a bot from your army by clicking on it. The bot will disappear from the `YourBotArmy` component.
- Discharge a bot from their service forever by clicking the red button marked "x", which will delete the bot both from the backend and from the `YourBotArmy` on the frontend.

## Contributing

Contributions to Bot Battlr are welcome! If you find any issues or have suggestions for improvement, feel free to open a pull request or an issue in this repository.

## License

This project is licensed under the MIT License 







