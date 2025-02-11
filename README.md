# Micro Frontend Dashboard

A modern dashboard application built with Single-SPA and React, demonstrating micro frontend architecture.

## Features

- 🏠 Home App - Welcome screen with user details and theme toggle
- 👤 Profile App - User profile management with form
- 🎨 Theme Support - Light/Dark mode with Emotion styled-components
- 📱 Responsive Design - Modern UI that works on all devices
- 🔄 State Management - Global state with Zustand
- 🚦 React Router - Seamless navigation between micro frontends

## Tech Stack

- Single-SPA for micro frontend orchestration
- React 17 for UI components
- Emotion for styled components
- Zustand for state management
- React Router for navigation
- Webpack 5 for bundling

## Prerequisites

- Node.js >= 18.17.0
- npm >= 9.6.7

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd Manvi
   ```

2. Install dependencies for all applications:

   ```bash
   # Root config
   npm install

   # Home app
   cd home
   npm install

   # Profile app
   cd ../profile
   npm install
   ```

## Running the Application

1. Make the start script executable:

   ```bash
   chmod +x start.sh
   ```

2. Start all applications:

   ```bash
   ./start.sh
   ```

3. Access the applications:
   - Root application: http://localhost:9000
   - Home application: http://localhost:8081
   - Profile application: http://localhost:8082

## Project Structure

```
Manvi/
├── src/                    # Root config
│   ├── index.ejs          # HTML template
│   └── store.js           # Global state
├── home/                   # Home micro frontend
│   └── src/
│       ├── root.component.js
│       └── dashboard-home.js
├── profile/               # Profile micro frontend
│   └── src/
│       ├── root.component.js
│       └── dashboard-profile.js
└── start.sh              # Start script
```

## Features

### Home App

- Welcome message
- Theme toggle
- User details display
- Responsive design

### Profile App

- Profile form with validation
- Data persistence
- Theme-aware UI components
- Real-time updates

## State Management

The application uses Zustand for state management with the following features:

- Theme state (light/dark)
- User profile data
- Cross-micro frontend state sharing

## Styling

Styled using Emotion with:

- Theme support
- Responsive design
- Reusable components
- Modern UI elements

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License.
