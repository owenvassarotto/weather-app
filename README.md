# Weather App <img src="public/Weather-icon.png" alt="Weather Icon" width="50">

A simple weather application built with Vite, React.js, TypeScript, Zod, and Styled Components. This app fetches weather data from a Weather API and displays it in a user-friendly interface.

## Features

- **Vite** for fast development and build.
- **React.js** for building user interfaces.
- **TypeScript** for static type checking.
- **Zod** for schema validation.
- **Styled Components** for styling.

## Live Demo

Check out the live demo: [Weather App Live Demo](https://climapp-owenvassarotto.netlify.app/)

## Getting Started

Follow these instructions to set up and run the project on your local machine.

### Prerequisites

- Node.js (>= 14.x)
- npm or yarn

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/owenvassarotto/weather-app.git
    cd weather-app
    ```

2. Install the dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

3. Add your Weather API key:
    - Create a `.env` file in the root of the project.
    - Add your API key:
      ```env
      VITE_WEATHER_API_KEY=your_api_key_here
      ```

### Running the App

1. Start the development server:
    ```bash
    npm run dev
    # or
    yarn dev
    ```

2. Open your browser and navigate to `http://localhost:5173`.

### Building for Production

1. Build the project:
    ```bash
    npm run build
    # or
    yarn build
    ```

2. Serve the build output:
    ```bash
    npm run serve
    # or
    yarn serve
    ```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Author

Developed by Owen Vassarotto.

You can find me on [LinkedIn](https://www.linkedin.com/in/owenvassarotto).
