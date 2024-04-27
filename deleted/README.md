
# Multiplayer Real-Time Chess Game

Welcome to the Multiplayer Real-Time Chess Game! This project is built using React for the frontend and Django for the backend, allowing users to play chess with others in real-time.

## Table of Contents

- Features
- Tech Stack
- Directory Structure
- Setup
- Running the Application
- Contributing
- License

## Features

- Real-time multiplayer chess gameplay
- User authentication and authorization
- Interactive chessboard with move validation
- Chat functionality for players to communicate
- History tracking of moves

## Tech Stack

- Frontend: React
- Backend: Django
- WebSocket Library: Django Channels
- Database: SQLite 

## Directory Structure

```
multiplayer-chess-game/
|-- backend/
|   |-- chess/
|   |   |-- __init__.py
|   |   |-- settings.py
|   |   |-- urls.py
|   |   |-- wsgi.py
|   |-- manage.py
|   |-- requirements.txt
|
|-- frontend/
|   |-- public/
|   |-- src/
|   |   |-- components/
|   |   |-- App.js
|   |   |-- index.js
|   |   |-- ...
|   |-- package.json
|   |-- README.md
|
|-- .gitignore
|-- README.md
|-- LICENSE
```

## Contributing

If you'd like to contribute to this project, please follow the [Contribution Guidelines](CONTRIBUTING.md).

## License

This project is licensed under the [MIT License](LICENSE).
